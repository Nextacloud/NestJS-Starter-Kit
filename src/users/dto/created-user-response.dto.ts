import { IsDateString, IsNotEmpty } from 'class-validator';
export class CreatedUserResponseDto {
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
  @IsDateString({ strict: true })
  created_at: string;

  @IsNotEmpty()
  @IsDateString({ strict: true })
  updated_at: string;
}
