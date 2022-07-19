
import {
  Body, Controller, Delete, Get, Param, ParseArrayPipe, ParseIntPipe, Post, Put, Req, UseFilters
} from '@nestjs/common';
import { SearchParam } from '../../shared-middleware/model/search-param';

import { ProductReviewDto } from './dto/product-review-dto';
import { ProductReviewUpdateDto } from './dto/product-review-update-dto';
import { ProductReview } from './product-review';
import { ProductReviewServiceImpl } from './service/impl/product-review-service-impl';

@Controller('product-review')
export class ProductReviewController {

  constructor(private service: ProductReviewServiceImpl) {
  }

  @Get()
  public async findAll(@Body('$searchParam') searchParam: Object): Promise<ProductReview[]> {
    return this.service.findAll(searchParam as SearchParam);
  }

  @Get('/detail/:id')
  public async findOne(@Param('id') id: string): Promise<ProductReview | null> {
    return this.service.findOne(id);
  }

  @Post()
  public async create(@Body() productReview: ProductReviewDto): Promise<ProductReview> {
    return this.service.create(productReview);
  }

  @Put('/update/:id')
  public async updateOne(@Param('id') id: string, @Body() productReview: ProductReviewUpdateDto): Promise<ProductReview> {
    return this.service.updateOne(id, productReview);
  }

  @Delete('/delete/:id')
  public async deleteOne(@Param('id', ParseIntPipe) id: string): Promise<boolean> {
    return this.service.deleteOne(id);
  }

  @Post('/add/many')
  public async addMany(@Body(new ParseArrayPipe({ 'items': ProductReviewDto, 'separator': ',' })) productReviews: ProductReviewDto[]): Promise<ProductReview[]> {
    return this.service.addMany(productReviews);
  }

  @Put('/remove/many')
  public async deleteMany(@Body('productReviewIds') productReviewIds: string[]): Promise<boolean> {
    return this.service.deleteMany(productReviewIds);
  }

}
