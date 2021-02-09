import { Body, Controller, Post } from '@nestjs/common';
import { hash } from 'bcrypt';
import { CreateUserReqDto } from 'src/users/dto/req/create-user.req.dto';
import { CreatedUserResDto } from 'src/users/dto/res/created-user.res.dto';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(
    @Body() createUserReqDto: CreateUserReqDto,
  ): Promise<CreatedUserResDto> {
    createUserReqDto.password = await hash(createUserReqDto.password, 10);
    const user: User = await this.usersService.create(createUserReqDto);

    return new CreatedUserResDto(user);
  }
}
