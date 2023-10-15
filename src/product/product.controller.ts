import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';

import { Product } from './product.interface';
import { ProductService } from './product.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductService) {}

  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Post()
  addProduct(@Body() product: Product) {
    return this.productsService.addProduct(product);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number) {
    return this.productsService.deleteProduct(id);
  }

  @Get(':id')
  getProduct(@Param('id') id: number) {
    return this.productsService.getProduct(id);
  }
}
