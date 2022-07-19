import { Injectable } from "@nestjs/common";
import { AbstractCrudRepositoryImpl } from '../../../../abstract/repository/impl/abstract-crud-repository-impl';
import { Newable } from '../../../entity/interface/Newable';
import { Country } from "../../country";
import { DefaultEntitySearch } from '../../../../helper/search/impl/default-search';

@Injectable()
export class CountryRepositoryImpl extends AbstractCrudRepositoryImpl<Country> {

  protected override readonly search: DefaultEntitySearch<Country> = DefaultEntitySearch.getInstance({});
  protected override readonly EntityDomain: Newable<any> = Country;

}
