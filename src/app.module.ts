import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/controllers/products.controller';
import { CategoriesController } from './categories/controllers/categories.controller';
import { ProductService } from './products/services/product.service';
import { BrandsController } from './brands/controllers/brands.controller';
import { CustomerController } from './customer/controllers/customer.controller';
import { UsersController } from './users/controllers/users.controller';
import { UsersService } from './users/services/users.service';
import { BrandsService } from './brands/services/brands.service';
import { CustomerService } from './customer/services/customer.service';
import { CategoriesService } from './categories/services/categories.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { BrandsModule } from './brands/brands.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    CategoriesModule,
    BrandsModule,
    CustomerModule,
  ],
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
