import { IsDateString, IsNotEmpty } from 'class-validator';
import { UserInterface } from 'src/users/interface/user.interface';
import * as dayjs from 'dayjs';

export class UserResource {
  constructor(data: UserInterface) {
    this.username = data.username;
    this.email = data.email;
    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.created_at = dayjs(data.created_at).format(
      process.env.DATE_TIME_FORMAT,
    );
    this.updated_at = dayjs(data.updated_at).format(
      process.env.DATE_TIME_FORMAT,
    );
  }

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
  created_at: string;

  @IsNotEmpty()
  @IsDateString({ strict: true })
  updated_at: string;
}
