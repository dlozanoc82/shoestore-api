// src/users/dtos/user.dtos.ts
import { IsString, IsEmail, IsNotEmpty, IsIn } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @IsIn(['admin', 'seller', 'viewer'])
  readonly role: 'admin' | 'seller' | 'viewer';
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
