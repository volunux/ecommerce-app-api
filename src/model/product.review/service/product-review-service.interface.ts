import { CrudService } from "../../../abstract/service/crud-service.interface";
import { ProductReviewDto } from "../dto/product-review-dto";
import { ProductReviewUpdateDto } from "../dto/product-review-update-dto";
import { ProductReview } from "../product-review";

export interface ProductReviewService extends CrudService<ProductReview, ProductReviewDto, ProductReviewUpdateDto> {

}
