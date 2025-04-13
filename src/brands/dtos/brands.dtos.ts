// src/brands/dtos/brand.dtos.ts
import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly description?: string;

  @IsBoolean()
  @IsOptional()
  readonly active?: boolean;
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
