// src/users/services/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../entities/users.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dtos';

@Injectable()
export class UsersService {
  private counterId = 1;
  private users: User[] = [
    {
      id: 1,
      username: 'admin',
      email: 'admin@store.com',
      password: 'admin123', // En la vida real, esto debería ir encriptado
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    const user = this.users.find((item) => item.id === id);
    if (!user) throw new NotFoundException(`User with id ${id} not found`);
    return user;
  }

  create(payload: CreateUserDto): User {
    this.counterId++;
    const newUser: User = {
      id: this.counterId,
      ...payload,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, payload: UpdateUserDto): User {
    const user = this.findOne(id);
    const index = this.users.findIndex((item) => item.id === id);
    const updatedUser = {
      ...user,
      ...payload,
      updatedAt: new Date(),
    };
    this.users[index] = updatedUser;
    return updatedUser;
  }

  remove(id: number): boolean {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    this.users.splice(index, 1);
    return true;
  }
}
