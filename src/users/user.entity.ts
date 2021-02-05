import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { Exclude } from 'class-transformer';

@Entity()
@Unique(['username', 'email', 'id'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255, unique: true })
  @IsEmail({}, { message: 'Incorrect email' })
  @IsNotEmpty({ message: 'The email is required' })
  email: string;

  @Column({ length: 255, unique: true })
  @Length(2, 30, {
    message: 'The name must be at least 2 but not longer than 30 characters',
  })
  @IsNotEmpty({ message: 'The name is required' })
  username: string;

  @Column({ length: 255 })
  first_name: string;

  @Column({ length: 255 })
  last_name: string;

  @Column({ type: 'date' })
  date_of_birth: string;

  @Column({ length: 255 })
  @Length(6, 30, {
    message:
      'The password must be at least 6 but not longer than 30 characters',
  })
  @IsNotEmpty({ message: 'The password is required' })
  @Exclude()
  password: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}
