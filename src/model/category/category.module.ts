import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category';
import { CategoryServiceImpl } from './service/impl/category-service-impl';
import { CategoryRepositoryImpl } from './repository/impl/category-repository-impl';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [CategoryServiceImpl, CategoryRepositoryImpl],
  exports: [TypeOrmModule]
})
export class CategoryModule {}
