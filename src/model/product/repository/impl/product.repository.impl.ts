import { Injectable } from "@nestjs/common";
import { AbstractCrudRepositoryImpl } from '../../../../abstract/repository/impl/abstract-crud-repository-impl';
import { AbstractBaseEntitySearch } from "../../../../helper/search/abstract/abstract-base-entity-search";
import { Newable } from "../../../entity/interface/Newable";
import { Product } from "../../product";
import { ProductRepository } from "../product.repository.interface";

@Injectable()
export class ProductRepositoryImpl extends AbstractCrudRepositoryImpl<Product> implements ProductRepository {

  protected override readonly EntityDomain: Newable<any> = Product;
  protected override readonly search: AbstractBaseEntitySearch<Product>;

}
