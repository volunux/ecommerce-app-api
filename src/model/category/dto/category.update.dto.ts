import { IsOptional, IsString, Length, ValidationArguments } from '@nestjs/class-validator';
import { CategoryValidationMessages } from './category.validation.messages';

export class CategoryUpdateDto {

  @IsString({ 'message': CategoryValidationMessages.title.isString })
  @IsOptional()
  @Length(3, 150, { 'message': (value: ValidationArguments) => CategoryValidationMessages.title.length(value) })
  private title: string;

  @IsString({ 'message': CategoryValidationMessages.description.isString })
  @IsOptional()
  @Length(10, 300, { 'message': (value: ValidationArguments) => CategoryValidationMessages.description.length(value) })
  private description: string;
}