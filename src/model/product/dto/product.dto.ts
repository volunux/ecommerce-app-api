import { IsNotEmpty, IsNumber, IsString, Length, ValidationArguments } from '@nestjs/class-validator';
import { ProductValidationMessages } from './product.validation.messages';

export class ProductDto {
 
  @IsString({'message': ProductValidationMessages.title.isString})
  @IsNotEmpty({'message': ProductValidationMessages.title.isNotEmpty})
  @Length(5, 150, {'message': (value: ValidationArguments) => ProductValidationMessages.title.length(value)})
  private title: string;

  @IsString({ 'message': ProductValidationMessages.description.isString })
  @IsNotEmpty({ 'message': ProductValidationMessages.description.isNotEmpty })
  @Length(10, 1000, { 'message': (value: ValidationArguments) => ProductValidationMessages.description.length(value) })
  private description: string;

  @IsNotEmpty({'message' : (value) => ProductValidationMessages.price.isNotEmpty})
  @IsNumber({ 'allowNaN': false }, { 'message': ProductValidationMessages.price.isNumber})
  private price: number;

  @IsString({ 'message': ProductValidationMessages.shop.isString })
  @IsNotEmpty({ 'message': ProductValidationMessages.shop.isNotEmpty })
  @Length(10, 150, { 'message': (value: ValidationArguments) => ProductValidationMessages.shop.length(value) })
  private shop: string;

  @IsNotEmpty({ 'message': (value) => ProductValidationMessages.price.isNotEmpty })
  @IsNumber({ 'allowNaN': false }, { 'message': ProductValidationMessages.price.isNumber })
  private quantity: number;

}