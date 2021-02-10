import { Injectable } from '@nestjs/common';
import { CreateUserReqDto } from 'src/users/dto/req/create-user.req.dto';
import { hash } from 'bcrypt';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async register(userDto: CreateUserReqDto): Promise<User> {
    userDto.password = await hash(userDto.password, 10);
    const user: User = await this.usersService.create(userDto);
    return user;
  }
}
