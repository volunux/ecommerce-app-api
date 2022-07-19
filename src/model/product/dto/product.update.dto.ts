import { IsNumber, IsOptional, IsString, Length, ValidationArguments } from '@nestjs/class-validator';
import { ProductValidationMessages } from './product.validation.messages';

export class ProductUpdateDto {

  @IsString({ 'message': ProductValidationMessages.title.isString })
  @IsOptional()
  @Length(5, 150, { 'message': (value: ValidationArguments) => ProductValidationMessages.title.length(value) })
  private title: string;

  @IsString({ 'message': ProductValidationMessages.description.isString })
  @IsOptional()
  @Length(10, 1000, { 'message': (value: ValidationArguments) => ProductValidationMessages.description.length(value) })
  private description: string;

  @IsOptional()
  @IsNumber({ 'allowNaN': false }, { 'message': ProductValidationMessages.price.isNumber })
  private price: number;

  @IsString({ 'message': ProductValidationMessages.shop.isString })
  @IsOptional()
  @Length(10, 150, { 'message': (value: ValidationArguments) => ProductValidationMessages.shop.length(value) })
  private shop: string;

  @IsOptional()
  @IsNumber({ 'allowNaN': false }, { 'message': ProductValidationMessages.price.isNumber })
  private quantity: number;

}