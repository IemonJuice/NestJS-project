import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  Request,
  SerializeOptions,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth-service/auth.service';
import { LoginSuccessResponseModel } from '../../../core/models/login-success-response.model';
import { RegisterUserCredentialsModel } from '../../../core/models/register-user-credentials.model';
import { RegisterService } from '../register/register.service';

@Controller('auth')
@SerializeOptions({ strategy: 'exposeAll' })
export class AuthController {
  constructor(
    private authService: AuthService,
    private registerService: RegisterService,
  ) {}

  @Post('register')
  @UseInterceptors(ClassSerializerInterceptor)
  async register(
    @Body() userCredentialsToRegister: RegisterUserCredentialsModel,
  ): Promise<unknown> {
    return this.registerService.registerUser(userCredentialsToRegister);
  }

  @Post('login')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard('local'))
  async login(@Request() request): Promise<LoginSuccessResponseModel> {
    return {
      userId: request.user.id,
      token: this.authService.getTokenForUser(request.user),
    };
  }

  @Get('profile')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard('jwt'))
  async getAccount(@Request() request): Promise<unknown> {
    return request.user;
  }
}
