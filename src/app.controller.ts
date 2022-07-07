import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { AuditService } from './audit/audit.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Health } from './Interfaces/Health.dto';
import { LoginDto } from './Interfaces/Login.dto';
import { Payload } from './Interfaces/Payload.dto';
import { RegisterDto } from './Interfaces/Register.dto';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private auditService: AuditService,
  ) {}

  /**
   * Sign in and retrieve an access token
   */

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req, @Body() dto: LoginDto): Promise<Payload> {
    return this.authService.login(req.user);
  }

  /**
   * Get user profile
   */

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }

  /**
   * Register a new account
   */

  @Post('register')
  async register(@Body() dto: RegisterDto): Promise<User> {
    return this.userService.registerUser(dto);
  }

  /**
   * Retrieve the audit trail
   */
  @UseGuards(JwtAuthGuard)
  @Get('audit')
  async getTrail() {
    return this.auditService.findAll();
  }

  /**
   * Health Check
   */

  @Get('health')
  getHealth(): Health {
    return {
      uptime: process.uptime(),
      message: 'OK',
      timestamp: Date.now(),
    };
  }
}
