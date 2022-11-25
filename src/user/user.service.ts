import { Injectable } from '@nestjs/common';
import { UserCreateDto } from './dto/create-user.dto';
import { UserUpdateDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  async findAll(): Promise<any[]> {
    return [];
  }
  async create(userCreateDto: UserCreateDto): Promise<any> {
    return userCreateDto;
  }
  async update(userUpdateDto: UserUpdateDto, userId: number): Promise<any> {
    return userId;
  }
  async findOne(userId: number): Promise<any> {
    return userId;
  }
  async delete(userId: number): Promise<any> {
    return userId;
  }
}
