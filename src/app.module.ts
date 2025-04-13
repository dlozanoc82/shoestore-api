import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { ProductService } from './services/product/product.service';
import { BrandsController } from './controllers/brands/brands.controller';
import { CustomerController } from './controllers/customer/customer.controller';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { BrandsService } from './services/brands/brands.service';
import { CustomerService } from './services/customer/customer.service';
import { CategoriesService } from './services/categories/categories.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    BrandsController,
    CustomerController,
    UsersController,
  ],
  providers: [
    AppService,
    ProductService,
    UsersService,
    BrandsService,
    CustomerService,
    CategoriesService,
  ],
})
export class AppModule {}
