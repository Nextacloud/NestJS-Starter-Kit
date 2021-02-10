import { Injectable } from '@nestjs/common';
import { CreateUserReqDto } from 'src/users/dto/create-user.req.dto';
import { compare, hash } from 'bcrypt';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserResource } from 'src/users/resource/user.resource';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(userDto: CreateUserReqDto): Promise<User> {
    userDto.password = await hash(userDto.password, 10);
    const user: User = await this.usersService.create(userDto);
    return user;
  }

  async validateUser(username: string, password: string): Promise<User | null> {
    let user: User = await this.usersService.findOne({ username: username });

    if (!user) {
      user = await this.usersService.findOne({ email: username });
    }

    const success = await compare(password, user.password);

    if (success) return user;

    return null;
  }

  async getToken(user: User) {
    const simpleUser = new UserResource(user);
    const payload = {
      ...simpleUser,
      login_at: new Date(),
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
