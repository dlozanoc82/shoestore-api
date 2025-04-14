// src/brands/dtos/brand.dtos.ts
import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';
import { PartialType, ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateBrandDto {
  @ApiProperty({ example: 'Nike', description: 'Nombre de la marca' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiPropertyOptional({
    example: 'Marca deportiva',
    description: 'Descripción de la marca',
  })
  @IsString()
  @IsOptional()
  readonly description?: string;

  @ApiPropertyOptional({ example: true, description: 'Estado de la marca' })
  @IsBoolean()
  @IsOptional()
  readonly active?: boolean;
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
