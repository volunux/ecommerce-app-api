import { IsOptional, IsString, Length, ValidationArguments } from '@nestjs/class-validator';
import { OrderStatusValidationMessages } from './order.status.validation.messages';


export class OrderStatusUpdateDto {

  @IsString({ 'message': OrderStatusValidationMessages.title.isString })
  @IsOptional()
  @Length(3, 150, { 'message': (value: ValidationArguments) => OrderStatusValidationMessages.title.length(value) })
  private title: string;

  @IsString({ 'message': OrderStatusValidationMessages.description.isString })
  @IsOptional()
  @Length(10, 300, { 'message': (value: ValidationArguments) => OrderStatusValidationMessages.description.length(value) })
  private description: string;
}