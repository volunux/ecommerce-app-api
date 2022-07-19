import { IsOptional, IsString, Length, ValidationArguments } from "@nestjs/class-validator";
import { RoleValidationMessages } from './role-validation-messages';

export class RoleUpdateDto {

  @IsString({ 'message': RoleValidationMessages.title.isString })
  @IsOptional()
  @Length(3, 150, { 'message': (value: ValidationArguments) => RoleValidationMessages.title.length(value) })
  private title: string;

  @IsString({ 'message': RoleValidationMessages.word.isString })
  @IsOptional()
  @Length(3, 150, { 'message': (value: ValidationArguments) => RoleValidationMessages.word.length(value) })
  private word: string;

  @IsString({ 'message': RoleValidationMessages.description.isString })
  @IsOptional()
  @Length(10, 300, { 'message': (value: ValidationArguments) => RoleValidationMessages.description.length(value) })
  private description: string; 
}
