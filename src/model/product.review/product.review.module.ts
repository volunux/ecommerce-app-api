import { Module } from '@nestjs/common';
import { ProductReviewController } from './product.review.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductReview } from 'src/model/product.review/product-review';
import { ProductReviewServiceImpl } from './service/impl/product-review-service-impl';
import { ProductReviewRepositoryImpl } from './repository/impl/product-review-repository-impl';

@Module({
  imports: [TypeOrmModule.forFeature([ProductReview])],
  controllers: [ProductReviewController],
  providers: [ProductReviewServiceImpl, ProductReviewRepositoryImpl]
})
export class ProductReviewModule {}
