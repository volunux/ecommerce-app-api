import { IsNotEmpty, Length, Max, MaxLength, ValidationArguments, isNotEmpty, IsString, IsNumber } from '@nestjs/class-validator';
import { CountryValidationMessages } from './country.validation.messages';

export class CountryDto {
 
  @IsString({'message': CountryValidationMessages.title.isString})
  @IsNotEmpty({'message': CountryValidationMessages.title.isNotEmpty})
  @Length(3, 150, {'message': (value: ValidationArguments) => CountryValidationMessages.title.length(value)})
  private title: string;

  @IsString({ 'message': CountryValidationMessages.description.isString })
  @IsNotEmpty({ 'message': CountryValidationMessages.description.isNotEmpty })
  @Length(10, 300, { 'message': (value: ValidationArguments) => CountryValidationMessages.description.length(value) })
  private description: string;
}