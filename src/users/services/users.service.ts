// src/users/services/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { User } from '../entities/users.entity';
import { Order } from '../entities/order.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dtos';
import { ProductService } from 'src/products/services/product.service';

@Injectable()
export class UsersService {
  constructor(
    private productService: ProductService,
    private configService: ConfigService,
  ) {}

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
    const apiKey = this.configService.get('API_KEY');
    const db = this.configService.get('DATABASE_NAME');
    console.log(`API Key: ${apiKey}`);
    console.log(`Database Name: ${db}`);
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

  getOrdersByUser(id: number): Order {
    const user = this.findOne(id);
    return {
      date: new Date(),
      user,
      products: this.productService.findAll(),
    };
  }
}
