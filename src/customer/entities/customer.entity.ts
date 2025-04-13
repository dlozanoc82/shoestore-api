// src/customers/entities/customer.entity.ts
export class Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  address?: string;
  createdAt: Date;
  updatedAt: Date;
}
