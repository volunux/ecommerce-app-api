
import {
  Body, Controller, Delete, Get, Param, ParseArrayPipe, ParseIntPipe, Post, Put, Req, UseFilters
} from '@nestjs/common';

import { UserStatusDto } from './dto/user-status.dto';
import { UserStatusUpdateDto } from './dto/user-status-update.dto';
import { UserStatus } from './user.status';
import { UserStatusServiceImpl } from './service/impl/user-status-service-impl';
import { SearchParam } from '../../shared-middleware/model/search-param';

@Controller('user-status')
export class UserStatusController {

  constructor(private service: UserStatusServiceImpl) {
  }

  @Get()
  public async findAll(@Body('$searchParam') searchParam: Object): Promise<UserStatus[]> {
    return this.service.findAll(searchParam as SearchParam);
  }

  @Get('/detail/:id')
  public async findOne(@Param('id') id: string): Promise<UserStatus | null> {
    return this.service.findOne(id);
  }

  @Post()
  public async create(@Body() entry: UserStatusDto): Promise<UserStatus> {
    return this.service.create(entry);
  }

  @Put('/update/:id')
  public async updateOne(@Param('id') id: string, @Body() entry: UserStatusUpdateDto): Promise<UserStatus> {
    return this.service.updateOne(id, entry);
  }

  @Delete('/delete/:id')
  public async deleteOne(@Param('id', ParseIntPipe) id: string): Promise<boolean> {
    return this.service.deleteOne(id);
  }

  @Post('/add/many')
  public async addMany(@Body(new ParseArrayPipe({ 'items': UserStatusDto, 'separator': ',' })) entries: UserStatusDto[]): Promise<UserStatus[]> {
    return this.service.addMany(entries);
  }

  @Put('/remove/many')
  public async deleteMany(@Body('ids') ids: string[]): Promise<boolean> {
    return this.service.deleteMany(ids);
  }

}
