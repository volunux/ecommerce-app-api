import {
  Body, Controller, Delete, Get, Param, ParseArrayPipe, ParseIntPipe, Post, Put, Req, UseFilters
} from '@nestjs/common';
import { SearchParam } from '../../shared-middleware/model/search-param';

import { BaseEntityControllerImpl } from '../../abstract/controller/impl/base-entity-controller-impl';
import { Country } from './country';
import { CountryDto } from './dto/country.dto';
import { CountryUpdateDto } from './dto/country.update.dto';
import { CountryServiceImpl } from './service/impl/country-service-impl';


@Controller('country')
export class CountryController extends BaseEntityControllerImpl<Country, CountryDto, CountryUpdateDto> {

  constructor(protected override service: CountryServiceImpl) {
    super();
  }

  @Get(['', '/entries'])
  public async findAll(@Body('$searchParam') searchParam: Object): Promise<Country[]> {
    return this.service.findAll(searchParam as SearchParam);
  }

  @Get('/detail/:id')
  public async findOne(@Param('id') id: string): Promise<Country | null> {
    return this.service.findOne(id);
  }

  @Post(['', '/save'])
  public async create(@Body() entry: CountryDto): Promise<Country> {
    return this.service.create(entry);
  }

  @Put('/update/:id')
  public async updateOne(@Param('id') id: string, @Body() entry: CountryUpdateDto): Promise<Country> {
    return this.service.updateOne(id, entry);
  }

  @Delete('/delete/:id')
  public async deleteOne(@Param('id', ParseIntPipe) id: string): Promise<boolean> {
    return this.service.deleteOne(id);
  }

  @Post('/add/many')
  public async addMany(@Body(new ParseArrayPipe({ 'items': CountryDto, 'separator': ',' })) entries: CountryDto[]): Promise<Country[]> {
    return this.service.addMany(entries);
  }

  @Get('/delete/entries/all')
  public async deleteMany(): Promise<boolean> {
    return this.service.deleteAll();
  }

  @Post('/delete/entries/all')
  public async findAndDeleteAll(): Promise<boolean> {
    return this.service.findAndDeleteAll();
  }

}
