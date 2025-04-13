// src/customers/services/customers.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from '../entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dtos';

@Injectable()
export class CustomerService {
  private counterId = 1;
  private customers: Customer[] = [
    {
      id: 1,
      name: 'Juan Pérez',
      email: 'juan@example.com',
      phone: '3001234567',
      address: 'Calle 123 #45-67',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  findAll(): Customer[] {
    return this.customers;
  }

  findOne(id: number): Customer {
    const customer = this.customers.find((item) => item.id === id);
    if (!customer) {
      throw new NotFoundException(`Customer with id ${id} not found`);
    }
    return customer;
  }

  create(payload: CreateCustomerDto): Customer {
    this.counterId++;
    const newCustomer: Customer = {
      id: this.counterId,
      ...payload,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  update(id: number, payload: UpdateCustomerDto): Customer {
    const customer = this.findOne(id);
    const index = this.customers.findIndex((item) => item.id === id);
    const updatedCustomer: Customer = {
      ...customer,
      ...payload,
      updatedAt: new Date(),
    };
    this.customers[index] = updatedCustomer;
    return updatedCustomer;
  }

  remove(id: number): boolean {
    const index = this.customers.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Customer with id ${id} not found`);
    }
    this.customers.splice(index, 1);
    return true;
  }
}
