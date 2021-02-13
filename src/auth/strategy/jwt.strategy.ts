import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UsersService,
  ) {
    super({
      // get JWT from session
      jwtFromRequest: (req) => {
        return req.session.token;
      },
      ignoreExpiration: false,
      secretOrKey: configService.get('APP_KEY'),
    });
  }

  async validate(payload: any) {
    const user_id = payload.id;
    const user = this.userService.findOne({ id: user_id });
    return user;
  }
}
