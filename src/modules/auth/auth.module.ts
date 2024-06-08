import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from 'src/modules/user/user.service';
import { PrismaService } from 'src/services/prisma.service';
import { JwtService } from '@nestjs/jwt';


@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService, PrismaService, JwtService]
})
export class AuthModule {}
