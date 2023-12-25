import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from '../../../database/entites/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class JwtStrategyService  extends PassportStrategy(Strategy){
  constructor(@InjectRepository(User) private readonly  userRepository:Repository<User>) {
    super({
      jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration:false,
      secretOrKey:'secret'
      //TODO delete hardcoded value and put it into the environment
    });
  }
  async validate(payload:any){
    return await this.userRepository.findOneBy({
      id:payload.sub,
    })
  }
}
