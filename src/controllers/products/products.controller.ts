import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProductsQuery(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `product: limit => ${limit} and offset => ${offset} and brand => ${brand}`,
    };
  }

  @Get('filter')
  getProductFilter() {
    return {
      message: `Soy un filter`,
    };
  }

  @Get(':productId')
  getProducts(@Param('productId') productId: string) {
    return {
      message: `product ${productId}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'create product',
      payload,
    };
  }

  @Put(':productId')
  update(@Param('productId') productId: number, @Body() payload: any) {
    return {
      id: productId,
      message: 'update product',
      payload,
    };
  }

  @Delete(':productId')
  delete(@Param('productId') productId: number) {
    return {
      id: productId,
      message: 'delete product',
    };
  }
}
