import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuditService } from './audit/audit.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private auditService: AuditService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }

  @Post('register')
  async register(@Body() dto) {
    return this.userService.registerUser(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('audit')
  async getTrail() {
    return this.auditService.findAll();
  }

  @Get('health')
  getHealth() {
    return {
      uptime: process.uptime(),
      message: 'OK',
      timestamp: Date.now(),
    };
  }
}
