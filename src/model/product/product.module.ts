import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductRepositoryImpl } from './repository/impl/product.repository.impl';
import { ProductServiceImpl } from './service/impl/product.service.impl';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductServiceImpl, ProductRepositoryImpl],
  controllers: [ProductController],
  exports: [TypeOrmModule]
})
export class ProductModule {}
