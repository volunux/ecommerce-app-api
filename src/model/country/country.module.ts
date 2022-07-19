import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryController } from './country.controller';
import { Country } from './country';
import { CountryServiceImpl } from './service/impl/country-service-impl';
import { CountryRepositoryImpl } from './repository/impl/country-repository-impl';

@Module({
  imports: [TypeOrmModule.forFeature([Country])],
  controllers: [CountryController],
  providers: [CountryServiceImpl, CountryRepositoryImpl],
  exports: [TypeOrmModule]
})
export class CountryModule {}
