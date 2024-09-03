import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsEnum,
  IsNumber,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['user', 'moderator', 'admin'], {
    message: 'Valid Role required',
  })
  role: 'user' | 'moderator' | 'admin';

  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;
}
