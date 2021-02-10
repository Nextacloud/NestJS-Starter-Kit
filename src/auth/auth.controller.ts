import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CreateUserReqDto } from 'src/users/dto/create-user.req.dto';
import { LoginReqDto } from 'src/users/dto/login.req.dto';
import { UserResource } from 'src/users/resource/user.resource';
import { User } from 'src/users/user.entity';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() userDto: CreateUserReqDto): Promise<UserResource> {
    let user: UserResource = await this.authService.register(userDto);
    user = new UserResource(user);
    return user;
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() loginDto: LoginReqDto): Promise<any> {
    const user: User = await this.authService.validateUser(
      loginDto.username,
      loginDto.password,
    );

    return this.authService.getToken(user);
  }
}
