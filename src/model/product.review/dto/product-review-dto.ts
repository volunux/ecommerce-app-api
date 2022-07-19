import { IsBoolean, IsNotEmpty, IsNumber, IsString, Length, ValidationArguments } from '@nestjs/class-validator';
import { ProductReviewValidationMessages } from "./product.review.validation.messages";

export class ProductReviewDto {

  @IsString({ 'message': ProductReviewValidationMessages.title.isString })
  @IsNotEmpty({ 'message': ProductReviewValidationMessages.title.isNotEmpty })
  @Length(10, 150, { 'message': (value: ValidationArguments) => ProductReviewValidationMessages.title.length(value) })
  private title: string;

  @IsString({ 'message': ProductReviewValidationMessages.content.isString })
  @IsNotEmpty({ 'message': ProductReviewValidationMessages.content.isNotEmpty })
  @Length(10, 1000, { 'message': (value: ValidationArguments) => ProductReviewValidationMessages.content.length(value) })
  private content: string;

  @IsBoolean({ 'message': ProductReviewValidationMessages.published.isBoolean })
  @IsNotEmpty({ 'message': ProductReviewValidationMessages.published.isNotEmpty })
  private published: boolean;

  @IsNumber({'allowNaN': false}, { 'message': ProductReviewValidationMessages.productId.isNumber })
  @IsNotEmpty({ 'message': ProductReviewValidationMessages.productId.isNotEmpty })
  private productId: number;

  @IsNumber({ 'allowNaN': false }, { 'message': ProductReviewValidationMessages.rating.isNumber })
  @IsNotEmpty({ 'message': ProductReviewValidationMessages.rating.isNotEmpty })
  private rating: number;

}
