import { Module } from '@nestjs/common';

import { AuthController } from './auth-controller/auth-controller.controller';
import { AuthService } from './auth-service/auth.service';
import { LocalStrategyService } from './local-strategy/local-strategy.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/database/entites/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategyService } from './jwt-strategy/jwt-strategy.service';
import { RegisterService } from './register/register.service';


@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: 'secret',
        signOptions: {
          expiresIn: '60m',
        },
      }),
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [AuthService, LocalStrategyService, JwtStrategyService, RegisterService],
  controllers: [AuthController],
})
export class AuthModule {
}
