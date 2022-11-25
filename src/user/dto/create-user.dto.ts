import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserCreateDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
