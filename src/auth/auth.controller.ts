import { Body, Controller, Post } from '@nestjs/common';
import { hash } from 'bcrypt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto): Promise<User> {
    createUserDto.password = await hash(createUserDto.password, 10);
    const user: User = await this.usersService.create(createUserDto);
    return user;
  }
}
