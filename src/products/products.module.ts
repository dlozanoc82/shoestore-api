import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { ProductService } from './services/product.service';
import { CategoriesModule } from 'src/categories/categories.module';

@Module({
  imports: [CategoriesModule],
  controllers: [ProductsController],
  providers: [ProductService],
})
export class ProductsModule {}
