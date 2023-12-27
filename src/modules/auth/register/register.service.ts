import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../database/entites/user.entity';
import { Repository } from 'typeorm';
import { RegisterUserCredentials } from '../../../core/models/register-user-credentials';
import { AuthService } from '../auth-service/auth.service';
import { hash } from 'bcrypt';

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private authService: AuthService,
  ) {}

  async registerUser(
    registerUserCredentials: RegisterUserCredentials,
  ): Promise<any> {
    const existedUser: User = await this.userRepository.findOneBy({
      username: registerUserCredentials.username,
    });

    if (existedUser) {
      throw new BadRequestException('user already exists');
    }

    const newUser: User = new User();
    newUser.password = await hash(registerUserCredentials.password, 10);
    newUser.username = registerUserCredentials.username;

    return {
      user: await this.userRepository.save(newUser),
      token: this.authService.getTokenForUser(newUser),
    };
  }
}
