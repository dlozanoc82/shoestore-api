// src/categories/dtos/category.dtos.ts
import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCategoryDto {
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

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
