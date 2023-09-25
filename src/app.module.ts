import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuditModule } from './audit/audit.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UsersModule,
    AuditModule,
    ServeStaticModule.forRoot({
      rootPath: process.env.PRODUCTION ? join(__dirname, '..', 'client') : join(__dirname, '..', 'client', 'build') ,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
