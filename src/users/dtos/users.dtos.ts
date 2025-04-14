// src/users/dtos/user.dtos.ts
import { IsString, IsEmail, IsNotEmpty, IsIn } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'juanperez',
    description: 'Nombre de usuario único',
  })
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({
    example: 'juan@example.com',
    description: 'Correo electrónico válido del usuario',
  })
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    example: '12345678',
    description: 'Contraseña del usuario (mínimo 8 caracteres)',
  })
  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({
    example: 'admin',
    description: 'Rol asignado al usuario',
    enum: ['admin', 'seller', 'viewer'],
  })
  @IsString()
  @IsIn(['admin', 'seller', 'viewer'])
  readonly role: 'admin' | 'seller' | 'viewer';
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
