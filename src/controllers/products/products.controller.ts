import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { ProductService } from 'src/services/product/product.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductService) {}

  @Get()
  getProductsQuery(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.productService.findAll();
  }

  @Get('filter')
  getProductFilter() {
    return {
      message: `Soy un filter`,
    };
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProducts(@Param('productId') productId: string) {
    return this.productService.findOne(+productId);
  }

  @Post()
  create(@Body() payload: any) {
    return this.productService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    return this.productService.update(+id, payload);
  }

  @Delete(':productId')
  delete(@Param('productId') productId: number) {
    return {
      id: productId,
      message: 'delete product',
    };
  }
}
