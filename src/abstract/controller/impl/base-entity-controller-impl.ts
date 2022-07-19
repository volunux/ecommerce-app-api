
import {
  Body, Delete, Get, Param, ParseArrayPipe, ParseIntPipe, Post, Put
} from '@nestjs/common';
import { SearchParam } from '../../../shared-middleware/model/search-param';
import { CrudService } from '../../service/crud-service.interface';
import { BaseEntityController } from '../base-entity-controller.interface';

export class BaseEntityControllerImpl<T, B, U> implements BaseEntityController<T, B, U> {

  protected readonly service: CrudService<T, B, U>;

  @Get(['', 'entries'])
  public async findAll(@Body('$searchParam') searchParam: Object): Promise<T[]> {
    return this.service.findAll(searchParam as SearchParam);
  }

  @Get('/detail/:id')
  public async findOne(@Param('id') id: string): Promise<T | null> {
    return this.service.findOne(id);
  }

  @Post(['', 'save'])
  public async create(@Body() entry: B): Promise<T> {
    return this.service.create(entry);
  }

  @Put('/update/:id')
  public async updateOne(@Param('id') id: string, @Body() entry: U): Promise<T> {
    return this.service.updateOne(id, entry);
  }

  @Delete('/delete/:id')
  public async deleteOne(@Param('id', ParseIntPipe) id: string): Promise<boolean> {
    return this.service.deleteOne(id);
  }

  @Post('/add/many')
  public async addMany(@Body(new ParseArrayPipe({ 'items': Object, 'separator': ',' })) entries: B[]): Promise<T[]> {
    return this.service.addMany(entries);
  }

  @Put('/remove/many')
  public async deleteMany(@Body('ids') ids: string[]): Promise<boolean> {
    return this.service.deleteMany(ids);
  }

}
