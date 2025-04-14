// src/categories/dtos/category.dtos.ts
import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';
import { PartialType, ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({
    example: 'Electrodomésticos',
    description: 'Nombre de la categoría',
  })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiPropertyOptional({
    example: 'Productos como neveras, licuadoras, microondas, etc.',
    description: 'Descripción detallada de la categoría',
  })
  @IsString()
  @IsOptional()
  readonly description?: string;

  @ApiPropertyOptional({
    example: true,
    description: 'Indica si la categoría está activa o no',
  })
  @IsBoolean()
  @IsOptional()
  readonly active?: boolean;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
