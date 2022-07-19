
import {
  Body, Controller, Delete, Get, Param, ParseArrayPipe, ParseIntPipe, Post, Put
} from '@nestjs/common';
import { BaseEntityControllerImpl } from '../../abstract/controller/impl/base-entity-controller-impl';
import { SearchParam } from '../../shared-middleware/model/search-param';
import { OrderUpdateDto } from './dto/order-update.dto';
import { OrderDto } from './dto/order.dto';
import { Order } from './order';
import { OrderServiceImpl } from './service/impl/order-service-impl';


@Controller('order')
export class OrderController extends BaseEntityControllerImpl<Order, OrderDto, OrderUpdateDto> {

  constructor(protected override service: OrderServiceImpl) {
    super();
  }

  @Get(['', '/entries'])
  public async findAll(@Body('$searchParam') searchParam: Object): Promise<Order[]> {
    return this.service.findAll(searchParam as SearchParam);
  }

  @Get('/detail/:id')
  public async findOne(@Param('id') id: string): Promise<Order | null> {
    return this.service.findOne(id);
  }

  @Post(['', '/save'])
  public async create(@Body() entry: OrderDto): Promise<Order> {
    return this.service.create(entry);
  }

  @Put('/update/:id')
  public async updateOne(@Param('id') id: string, @Body() entry: OrderUpdateDto): Promise<Order> {
    return this.service.updateOne(id, entry);
  }

  @Delete('/delete/:id')
  public async deleteOne(@Param('id', ParseIntPipe) id: string): Promise<boolean> {
    return this.service.deleteOne(id);
  }

  @Post('/add/many')
  public async addMany(@Body(new ParseArrayPipe({ 'items': OrderDto, 'separator': ',' })) entries: OrderDto[]): Promise<Order[]> {
    return this.service.addMany(entries);
  }

  @Put('/remove/many')
  public async deleteMany(@Body('ids') ids: string[]): Promise<boolean> {
    return this.service.deleteMany(ids);
  }

}
