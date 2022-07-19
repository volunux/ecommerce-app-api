import { IsNotEmpty, IsString, Length, ValidationArguments } from '@nestjs/class-validator';
import { CategoryValidationMessages } from './category.validation.messages';

export class CategoryDto {

  @IsString({ 'message': CategoryValidationMessages.title.isString })
  @IsNotEmpty({ 'message': CategoryValidationMessages.title.isNotEmpty })
  @Length(3, 150, { 'message': (value: ValidationArguments) => CategoryValidationMessages.title.length(value) })
  private title: string;

  @IsString({ 'message': CategoryValidationMessages.description.isString })
  @IsNotEmpty({ 'message': CategoryValidationMessages.description.isNotEmpty })
  @Length(10, 300, { 'message': (value: ValidationArguments) => CategoryValidationMessages.description.length(value) })
  private description: string;
}