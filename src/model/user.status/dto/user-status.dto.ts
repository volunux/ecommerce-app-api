import { IsNotEmpty, IsString, Length, ValidationArguments } from '@nestjs/class-validator';
import { UserStatusValidationMessages } from './user-status-validation-messages';

export class UserStatusDto {

  @IsString({ 'message': UserStatusValidationMessages.title.isString })
  @IsNotEmpty({ 'message': UserStatusValidationMessages.title.isNotEmpty })
  @Length(3, 150, { 'message': (value: ValidationArguments) => UserStatusValidationMessages.title.length(value) })
  private title: string;

  @IsString({ 'message': UserStatusValidationMessages.description.isString })
  @IsNotEmpty({ 'message': UserStatusValidationMessages.description.isNotEmpty })
  @Length(10, 300, { 'message': (value: ValidationArguments) => UserStatusValidationMessages.description.length(value) })
  private description: string;
}