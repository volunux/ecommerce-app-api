import { Injectable } from "@nestjs/common";
import { Newable } from "../../../../abstract/interface/Newable";
import { AbstractCrudServiceImpl } from '../../../../abstract/service/impl/abstract-crud-service-impl';
import { ProductReviewDto } from '../../dto/product-review-dto';
import { ProductReviewUpdateDto } from "../../dto/product-review-update-dto";
import { ProductReviewNotFoundException } from '../../exception/product-review-not-found-exception';
import { ProductReview } from '../../product-review';
import { ProductReviewRepositoryImpl } from '../../repository/impl/product-review-repository-impl';
import { ProductReviewService } from "../product-review-service.interface";

@Injectable()
export class ProductReviewServiceImpl extends AbstractCrudServiceImpl<ProductReview, ProductReviewDto, ProductReviewUpdateDto> implements ProductReviewService {

  protected override readonly EntityDomain: Newable<any> = ProductReview;
  protected override readonly EntityNotFoundException: Newable<ProductReviewNotFoundException> = ProductReviewNotFoundException;

  constructor(protected override repository: ProductReviewRepositoryImpl) {
    super();
  }

}
