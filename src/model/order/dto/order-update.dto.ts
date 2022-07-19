import { IsNotEmpty, Length, Max, MaxLength, ValidationArguments, isNotEmpty, IsString, IsNumber } from '@nestjs/class-validator';
import { OrderValidationMessages } from './order-validation-messages';

export class OrderUpdateDto {

  @IsString({ 'message': OrderValidationMessages.title.isString })
  @IsNotEmpty({ 'message': OrderValidationMessages.title.isNotEmpty })
  @Length(10, 150, { 'message': (value: ValidationArguments) => OrderValidationMessages.title.length(value) })
  private title: string;

  @IsString({ 'message': OrderValidationMessages.description.isString })
  @IsNotEmpty({ 'message': OrderValidationMessages.description.isNotEmpty })
  @Length(10, 1000, { 'message': (value: ValidationArguments) => OrderValidationMessages.description.length(value) })
  private description: string;
}