
import {
  Body, Controller, Delete, Get, Param, ParseArrayPipe, ParseIntPipe, Post, Put, Req, UseFilters
} from '@nestjs/common';
import { SearchParam } from '../../shared-middleware/model/search-param';

import { OrderStatusDto } from './dto/order.status.dto';
import { OrderStatusUpdateDto } from './dto/order.status.update.dto';
import { OrderStatus } from './order-status';
import { OrderStatusServiceImpl } from './service/impl/order-status-service-impl';

@Controller('order-status')
export class OrderStatusController {

  constructor(private service: OrderStatusServiceImpl) {
  }

  @Get()
  public async findAll(@Body('$searchParam') searchParam: Object): Promise<OrderStatus[]> {
    return this.service.findAll(searchParam as SearchParam);
  }

  @Get('/detail/:id')
  public async findOne(@Param('id') id: string): Promise<OrderStatus | null> {
    return this.service.findOne(id);
  }

  @Post()
  public async create(@Body() entry: OrderStatusDto): Promise<OrderStatus> {
    return this.service.create(entry);
  }

  @Put('/update/:id')
  public async updateOne(@Param('id') id: string, @Body() entry: OrderStatusUpdateDto): Promise<OrderStatus> {
    return this.service.updateOne(id, entry);
  }

  @Delete('/delete/:id')
  public async deleteOne(@Param('id', ParseIntPipe) id: string): Promise<boolean> {
    return this.service.deleteOne(id);
  }

  @Post('/add/many')
  public async addMany(@Body(new ParseArrayPipe({ 'items': OrderStatusDto, 'separator': ',' })) entries: OrderStatusDto[]): Promise<OrderStatus[]> {
    return this.service.addMany(entries);
  }

  @Put('/remove/many')
  public async deleteMany(@Body('ids') ids: string[]): Promise<boolean> {
    return this.service.deleteMany(ids);
  }

}
