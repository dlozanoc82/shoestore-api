// src/brands/services/brands.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Brand } from '../entities/brands.entity';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brands.dtos';

@Injectable()
export class BrandsService {
  private counterId = 1;

  private brands: Brand[] = [
    {
      id: 1,
      name: 'Nike',
      description: 'Marca reconocida de calzado deportivo.',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  findAll(): Brand[] {
    return this.brands;
  }

  findOne(id: number): Brand {
    const brand = this.brands.find((item) => item.id === id);
    if (!brand) {
      throw new NotFoundException(`Brand with id ${id} not found`);
    }
    return brand;
  }

  create(payload: CreateBrandDto): Brand {
    this.counterId++;
    const newBrand: Brand = {
      id: this.counterId,
      name: payload.name,
      description: payload.description || '',
      active: payload.active ?? true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  update(id: number, payload: UpdateBrandDto): Brand {
    const brand = this.findOne(id);
    const index = this.brands.findIndex((item) => item.id === id);
    const updatedBrand: Brand = {
      ...brand,
      ...payload,
      updatedAt: new Date(),
    };
    this.brands[index] = updatedBrand;
    return updatedBrand;
  }

  remove(id: number): boolean {
    const index = this.brands.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Brand with id ${id} not found`);
    }
    this.brands.splice(index, 1);
    return true;
  }
}
