// src/users/entities/user.entity.ts
export class User {
  id: number;
  username: string;
  email: string;
  password: string;
  role: 'admin' | 'seller' | 'viewer';
  createdAt: Date;
  updatedAt: Date;
}
