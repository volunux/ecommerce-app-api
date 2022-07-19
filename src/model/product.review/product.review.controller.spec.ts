import { Test, TestingModule } from '@nestjs/testing';
import { Product.ReviewController } from './product.review.controller';

describe('Product.ReviewController', () => {
  let controller: Product.ReviewController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Product.ReviewController],
    }).compile();

    controller = module.get<Product.ReviewController>(Product.ReviewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
