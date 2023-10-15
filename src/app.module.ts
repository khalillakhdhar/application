import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductService } from './product/product.service';
import { ProductsController } from './product/product.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductsController],

  providers: [AppService, ProductService],
})
export class AppModule {}
