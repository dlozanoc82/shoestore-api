// src/customers/dtos/customer.dtos.ts
import { IsString, IsEmail, IsOptional } from 'class-validator';
import { PartialType, ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCustomerDto {
  @ApiProperty({
    example: 'Carlos Rodríguez',
    description: 'Nombre completo del cliente',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    example: 'carlos@example.com',
    description: 'Correo electrónico válido del cliente',
  })
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    example: '3123456789',
    description: 'Número de teléfono del cliente',
  })
  @IsString()
  readonly phone: string;

  @ApiPropertyOptional({
    example: 'Cra 12 #45-67, Bogotá',
    description: 'Dirección física del cliente',
  })
  @IsString()
  @IsOptional()
  readonly address?: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
