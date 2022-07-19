
import {
  Body, Controller, Delete, Get, Param, ParseArrayPipe, ParseIntPipe, Post, Put, Req, UseFilters
} from '@nestjs/common';
import { SearchParam } from '../../shared-middleware/model/search-param';

import { ProductDto } from './dto/product.dto';
import { ProductUpdateDto } from './dto/product.update.dto';
import { Product } from './product';
import { ProductServiceImpl } from './service/impl/product.service.impl';

@Controller('product')
export class ProductController {

  constructor(private service: ProductServiceImpl) {
  }

  @Get(['', '/entries'])
  public async findAll(@Body('$searchParam') searchParam: Object): Promise<Product[]> {
    return this.service.findAll(searchParam as SearchParam);
  }

  @Get('/detail/:id')
  public async findOne(@Param('id') id: string): Promise<Product | null> {
    return this.service.findOne(id);
  }

  @Post('/save')
  public async create(@Body() entry: ProductDto): Promise<Product> {
    return this.service.create(entry);
  }

  @Put('/update/:id')
  public async updateOne(@Param('id') id: string, @Body() entry: ProductUpdateDto): Promise<Product> {
    return this.service.updateOne(id, entry);
  }

  @Delete('/delete/:id')
  public async deleteOne(@Param('id', ParseIntPipe) id: string): Promise<boolean> {
    return this.service.deleteOne(id);
  }

  @Post('/add/many')
  public async addMany(@Body(new ParseArrayPipe({ 'items': ProductDto, 'separator': ',' })) entries: ProductDto[]): Promise<Product[]> {
    return this.service.addMany(entries);
  }

  @Put('/remove/many')
  public async deleteMany(@Body('ids') ids: string[]): Promise<boolean> {
    return this.service.deleteMany(ids);
  }

}
