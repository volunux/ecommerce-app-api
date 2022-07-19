import { Injectable } from "@nestjs/common";
import { AbstractCrudRepositoryImpl } from '../../../../abstract/repository/impl/abstract-crud-repository-impl';
import { Newable } from "../../../entity/interface/Newable";
import { Category } from "../../category";
import { CategoryRepository } from "../category-repository.interface";
import { DefaultEntitySearch } from '../../../../helper/search/impl/default-search';

@Injectable()
export class CategoryRepositoryImpl extends AbstractCrudRepositoryImpl<Category> implements CategoryRepository {

  protected override readonly EntityDomain: Newable<any> = Category;
  protected override readonly search: DefaultEntitySearch<Category> = DefaultEntitySearch.getInstance({});

}
