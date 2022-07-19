
import {
  Body, Controller, Delete, Get, Param, ParseArrayPipe, ParseIntPipe, Post, Put, Req, UseFilters
} from '@nestjs/common';

import { UserDto } from './dto/user.dto';
import { UserUpdateDto } from './dto/user-update.dto';
import { User } from './user';
import { UserServiceImpl } from './service/impl/user-service-impl';
import { SearchParam } from '../../shared-middleware/model/search-param';

@Controller('user')
export class UserController {

  constructor(private service: UserServiceImpl) {
  }

  @Get()
  public async findAll(@Body('$searchParam') searchParam: Object): Promise<User[]> {
    return this.service.findAll(searchParam as SearchParam);
  }

  @Get('/detail/:id')
  public async findOne(@Param('id') id: string): Promise<User | null> {
    return this.service.findOne(id);
  }

  @Post()
  public async create(@Body() user: UserDto): Promise<User> {
    return this.service.create(user);
  }

  @Put('/update/:id')
  public async updateOne(@Param('id') id: string, @Body() user: UserUpdateDto): Promise<User> {
    return this.service.updateOne(id, user);
  }

  @Delete('/delete/:id')
  public async deleteOne(@Param('id', ParseIntPipe) id: string): Promise<boolean> {
    return this.service.deleteOne(id);
  }

  @Post('/add/many')
  public async addMany(@Body(new ParseArrayPipe({ 'items': UserDto, 'separator': ',' })) users: UserDto[]): Promise<User[]> {
    return this.service.addMany(users);
  }

  @Put('/remove/many')
  public async deleteMany(@Body('ids') userIds: string[]): Promise<boolean> {
    return this.service.deleteMany(userIds);
  }

}
