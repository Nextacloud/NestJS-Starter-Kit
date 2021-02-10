import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserReqDto } from 'src/users/dto/req/create-user.req.dto';
import { LoginReqDto } from 'src/users/dto/req/login.req.dto';
import { CreatedUserResDto } from 'src/users/dto/res/created-user.res.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() userDto: CreateUserReqDto,
  ): Promise<CreatedUserResDto> {
    let user: CreatedUserResDto = await this.authService.register(userDto);
    user = new CreatedUserResDto(user);
    return user;
  }

  @Post('login')
  async login(@Body() loginDto: LoginReqDto) {}
}
