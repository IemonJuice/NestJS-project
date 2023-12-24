import { Module } from '@nestjs/common';

import { AuthController } from './auth-controller/auth-controller.controller';
import { AuthService } from './auth-service/auth-service.service';

@Module({
  providers: [ AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
