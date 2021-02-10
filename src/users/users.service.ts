import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { CreateUserReqDto } from './dto/create-user.req.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserReqDto): Promise<User> {
    const user: User = await this.userRepository.save(createUserDto);
    return user;
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(params: DeepPartial<User>): Promise<User> {
    let user: User;

    try {
      user = await this.userRepository.findOne(params);
      return user;
    } catch (error) {
      throw new NotFoundException(`User with ${params.toString()} not found.`);
    }
  }

  async remove(params: DeepPartial<User>): Promise<User> {
    const user = await this.findOne(params);

    try {
      await this.userRepository.remove(user);
      return user;
    } catch (error) {
      throw new NotFoundException(`User with ${params.toString()} not found.`);
    }
  }
}
