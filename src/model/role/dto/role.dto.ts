import { IsNotEmpty, IsString, Length, ValidationArguments } from "@nestjs/class-validator";
import { RoleValidationMessages } from "./role-validation-messages";

export class RoleDto {

  @IsString({ 'message': RoleValidationMessages.title.isString })
  @IsNotEmpty({ 'message': RoleValidationMessages.title.isNotEmpty })
  @Length(3, 150, { 'message': (value: ValidationArguments) => RoleValidationMessages.title.length(value) })
  private title: string;

  @IsString({ 'message': RoleValidationMessages.word.isString })
  @IsNotEmpty({ 'message': RoleValidationMessages.word.isNotEmpty })
  @Length(3, 150, { 'message': (value: ValidationArguments) => RoleValidationMessages.word.length(value) })
  private word: string;

  @IsString({ 'message': RoleValidationMessages.description.isString })
  @IsNotEmpty({ 'message': RoleValidationMessages.description.isNotEmpty })
  @Length(10, 300, { 'message': (value: ValidationArguments) => RoleValidationMessages.description.length(value) })
  private description: string;
}
