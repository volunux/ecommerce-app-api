import {
    IsNotEmpty, isNotEmpty, IsNumber, IsOptional, IsString, Length, Max, MaxLength,
    ValidationArguments
} from '@nestjs/class-validator';

import { CountryValidationMessages } from './country.validation.messages';

export class CountryUpdateDto {

  @IsString({ 'message': CountryValidationMessages.title.isString })
  @IsOptional()
  @Length(3, 150, { 'message': (value: ValidationArguments) => CountryValidationMessages.title.length(value) })
  private title: string;

  @IsString({ 'message': CountryValidationMessages.description.isString })
  @IsOptional()
  @Length(10, 300, { 'message': (value: ValidationArguments) => CountryValidationMessages.description.length(value) })
  private description: string;
}