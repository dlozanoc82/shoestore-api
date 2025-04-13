// src/categories/services/categories.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from '../entities/category.entity';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/category.dtos';

@Injectable()
export class CategoriesService {
  private counterId = 1;

  private categories: Category[] = [
    {
      id: 1,
      name: 'Tenis deportivos',
      description: 'Calzado diseñado para actividades físicas y deportivas.',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  findAll(): Category[] {
    return this.categories;
  }

  findOne(id: number): Category {
    const category = this.categories.find((item) => item.id === id);
    if (!category) {
      throw new NotFoundException(`Category with id ${id} not found`);
    }
    return category;
  }

  create(payload: CreateCategoryDto): Category {
    this.counterId++;
    const newCategory: Category = {
      id: this.counterId,
      name: payload.name,
      description: payload.description || '',
      active: payload.active ?? true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  update(id: number, payload: UpdateCategoryDto): Category {
    const category = this.findOne(id);
    const index = this.categories.findIndex((item) => item.id === id);
    const updatedCategory: Category = {
      ...category,
      ...payload,
      updatedAt: new Date(),
    };
    this.categories[index] = updatedCategory;
    return updatedCategory;
  }

  remove(id: number): boolean {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Category with id ${id} not found`);
    }
    this.categories.splice(index, 1);
    return true;
  }
}
