
import {
  Body, Controller, Delete, Get, Param, ParseArrayPipe, ParseIntPipe, Post, Put, Req, UseFilters
} from '@nestjs/common';

import { RoleDto } from './dto/role.dto';
import { RoleUpdateDto } from './dto/role-update.dto';
import { Role } from './role';
import { RoleServiceImpl } from './service/impl/role-service-impl';
import { SearchParam } from '../../shared-middleware/model/search-param';

@Controller('role')
export class RoleController {

  constructor(private service: RoleServiceImpl) {
  }

  @Get()
  public async findAll(@Body('$searchParam') searchParam: Object): Promise<Role[]> {
    return this.service.findAll(searchParam as SearchParam);
  }

  @Get('/detail/:id')
  public async findOne(@Param('id') id: string): Promise<Role | null> {
    return this.service.findOne(id);
  }

  @Post()
  public async create(@Body() entry: RoleDto): Promise<Role> {
    return this.service.create(entry);
  }

  @Put('/update/:id')
  public async updateOne(@Param('id') id: string, @Body() entry: RoleUpdateDto): Promise<Role> {
    return this.service.updateOne(id, entry);
  }

  @Delete('/delete/:id')
  public async deleteOne(@Param('id', ParseIntPipe) id: string): Promise<boolean> {
    return this.service.deleteOne(id);
  }

  @Post('/add/many')
  public async addMany(@Body(new ParseArrayPipe({ 'items': RoleDto, 'separator': ',' })) entries: RoleDto[]): Promise<Role[]> {
    return this.service.addMany(entries);
  }

  @Put('/remove/many')
  public async deleteMany(@Body('ids') ids: string[]): Promise<boolean> {
    return this.service.deleteMany(ids);
  }

}
