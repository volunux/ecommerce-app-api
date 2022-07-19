import { Injectable } from "@nestjs/common";
import { AbstractCrudServiceImpl } from '../../../../abstract/service/impl/abstract-crud-service-impl';
import { Country } from '../../country';
import { CountryDto } from '../../dto/country.dto';
import { CountryUpdateDto } from "../../dto/country.update.dto";
import { CountryNotFoundException } from '../../exception/country-not-found-exception';
import { CountryRepositoryImpl } from '../../repository/impl/country-repository-impl';
import { CountryService } from '../country-service.interface';
import { Newable } from '../../../entity/interface/Newable';

@Injectable()
export class CountryServiceImpl extends AbstractCrudServiceImpl<Country, CountryDto, CountryUpdateDto> implements CountryService {

  protected override readonly EntityDomain: Newable<any> = Country;
  protected override readonly EntityNotFoundException: Newable<CountryNotFoundException> = CountryNotFoundException;

  constructor(protected override repository: CountryRepositoryImpl) {
    super();
  }

}
