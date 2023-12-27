import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../../../database/entites/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  getTokenForUser(user: User) {
    return this.jwtService.sign({
      username: user,
      sub: user.id,
    });
  }

  public async hasPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }
}
