import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { BrandsModule } from './brands/brands.module';
import { CustomerModule } from './customer/customer.module';

const API_KEY = '123455656';
const API_KEY_PROD = 'PROD-123455656';

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    CategoriesModule,
    BrandsModule,
    CustomerModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'production' ? API_KEY_PROD : API_KEY,
    },
  ],
})
export class AppModule {}
