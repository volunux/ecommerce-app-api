
import {
  Body, Controller, Delete, Get, Param, ParseArrayPipe, ParseIntPipe, Post, Put, Req, UseFilters
} from '@nestjs/common';

import { CategoryDto } from './dto/category.dto';
import { CategoryUpdateDto } from './dto/category.update.dto';
import { Category } from './category';
import { CategoryServiceImpl } from './service/impl/category-service-impl';
import { SearchParam } from '../../shared-middleware/model/search-param';

@Controller('category')
export class CategoryController {

  constructor(protected service: CategoryServiceImpl) {
  }

  @Get()
  public async findAll(@Body('$searchParam') searchParam: Object): Promise<Category[]> {
    return this.service.findAll(searchParam as SearchParam);
  }

  @Get('/detail/:id')
  public async findOne(@Param('id') id: string): Promise<Category | null> {
    return this.service.findOne(id);
  }

  @Post()
  public async create(@Body() entry: CategoryDto): Promise<Category> {
    return this.service.create(entry);
  }

  @Put('/update/:id')
  public async updateOne(@Param('id') id: string, @Body() entry: CategoryUpdateDto): Promise<Category> {
    return this.service.updateOne(id, entry);
  }

  @Delete('/delete/:id')
  public async deleteOne(@Param('id', ParseIntPipe) id: string): Promise<boolean> {
    return this.service.deleteOne(id);
  }

  @Post('/add/many')
  public async addMany(@Body(new ParseArrayPipe({ 'items': CategoryDto, 'separator': ',' })) entries: CategoryDto[]): Promise<Category[]> {
    return this.service.addMany(entries);
  }

  @Put('/remove/many')
  public async deleteMany(@Body('ids') ids: string[]): Promise<boolean> {
    return this.service.deleteMany(ids);
  }

}
