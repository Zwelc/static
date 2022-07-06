import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuditService } from 'src/audit/audit.service';
import { UsersService } from '../users/users.service';
import { scrypt } from 'crypto';
import { promisify } from 'util';

const scryptAsync = promisify(scrypt);

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private auditService: AuditService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.find({ username });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const [salt, storedHash] = user.password.split(':');

    const hash = (await scryptAsync(password, salt, 64)) as Buffer;
    if (storedHash == hash.toString('hex')) {
      const { password, ...result } = user;
      await this.auditService.create({
        date: new Date(Date.now()),
        action: 'logged in successfully',
        user: {
          connect: {
            id: user.id,
          },
        },
      });

      return result;
    }

    await this.auditService.create({
      date: new Date(Date.now()),
      action: 'failed to login',
      user: {
        connect: {
          id: user.id,
        },
      },
    });
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
