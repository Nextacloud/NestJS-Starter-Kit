import { IsDateString, IsNotEmpty } from 'class-validator';
import { Match } from 'src/decorators/validators/Match';

export class CreateUserReqDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  first_name: string;

  @IsNotEmpty()
  last_name: string;

  @IsNotEmpty()
  @IsDateString({ strict: true })
  date_of_birth: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @Match('password')
  password_confirmation: string;
}
