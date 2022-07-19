import { Injectable } from "@nestjs/common";
import { AbstractCrudRepositoryImpl } from '../../../../abstract/repository/impl/abstract-crud-repository-impl';
import { Newable } from "../../../entity/interface/Newable";
import { ProductReview } from "../../product-review";
import { ProductReviewRepository } from "../product-review-repository.interface";
import { DefaultEntitySearch } from '../../../../helper/search/impl/default-search';

@Injectable()
export class ProductReviewRepositoryImpl extends AbstractCrudRepositoryImpl<ProductReview> implements ProductReviewRepository {

  protected override readonly EntityDomain: Newable<any> = ProductReview;
  protected override readonly search: DefaultEntitySearch<ProductReview> = DefaultEntitySearch.getInstance({});
}
