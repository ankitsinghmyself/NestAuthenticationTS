import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { UserCreateDto } from './dto/create-user.dto';
import { UserUpdateDto } from './dto/update-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
  async create(userCreateDto: UserCreateDto): Promise<any> {
    return this.userRepository.save(userCreateDto);
  }
  async update(userUpdateDto: UserUpdateDto, userId: number): Promise<any> {
    return this.userRepository.update(userId, userUpdateDto);
  }
  async findOne(userId: number): Promise<User | null> {
    return this.userRepository.findOne({ where: { id: userId } });
  }
  async delete(userId: number): Promise<DeleteResult> {
    return this.userRepository.delete(userId);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } });
  }
}
