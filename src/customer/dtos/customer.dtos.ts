// src/customers/dtos/customer.dtos.ts
import { IsString, IsEmail, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCustomerDto {
  @IsString()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly phone: string;

  @IsString()
  @IsOptional()
  readonly address?: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
