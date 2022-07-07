/* eslint-disable @typescript-eslint/no-unused-vars */
import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';

const scryptAsync = promisify(scrypt);

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async find(where: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return this.prisma.user.findUnique({ where });
  }

  async registerUser(data: Prisma.UserCreateInput): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: { username: data.username },
    });

    if (user) {
      throw new BadRequestException('Username already exists');
    }
    const salt = randomBytes(8).toString('hex');
    const hash = (await scryptAsync(data.password, salt, 64)) as Buffer;
    const result = salt + ':' + hash.toString('hex');

    const record = await this.prisma.user.create({
      data: {
        ...data,
        password: result,
      },
    });
    const { password, ...userInfo } = record;

    return userInfo;
  }

  async updateUser(
    where: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput,
  ): Promise<User> {
    return this.prisma.user.update({ where, data });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({ where });
  }
}
