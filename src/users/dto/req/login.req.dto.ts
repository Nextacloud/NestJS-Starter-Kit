import { IsNotEmpty } from 'class-validator';

export class LoginReqDto {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
