import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UserCreateDto } from './dto/create-user.dto';
import { UserUpdateDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }
  @Post()
  async create(@Body() userCreateDto: UserCreateDto) {
    return await this.userService.create(userCreateDto);
  }
  @Patch(':id')
  async update(
    @Body() userUpdateDto: UserUpdateDto,
    @Param('id', ParseIntPipe) userId: number,
  ) {
    return await this.userService.update(userUpdateDto, userId);
  }
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) userId: number) {
    return await this.userService.findOne(userId);
  }
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) userId: number) {
    return await this.userService.delete(userId);
  }
}
