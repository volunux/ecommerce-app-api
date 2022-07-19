import { IsNotEmpty, IsString, Length, ValidationArguments } from '@nestjs/class-validator';
import { OrderStatusValidationMessages } from './order.status.validation.messages';

export class OrderStatusDto {

  @IsString({ 'message': OrderStatusValidationMessages.title.isString })
  @IsNotEmpty({ 'message': OrderStatusValidationMessages.title.isNotEmpty })
  @Length(3, 150, { 'message': (value: ValidationArguments) => OrderStatusValidationMessages.title.length(value) })
  private title: string;

  @IsString({ 'message': OrderStatusValidationMessages.description.isString })
  @IsNotEmpty({ 'message': OrderStatusValidationMessages.description.isNotEmpty })
  @Length(10, 300, { 'message': (value: ValidationArguments) => OrderStatusValidationMessages.description.length(value) })
  private description: string;
}