import { IsOptional, IsString, Length, ValidationArguments } from '@nestjs/class-validator';
import { UserStatusValidationMessages } from './user-status-validation-messages';


export class UserStatusUpdateDto {

  @IsString({ 'message': UserStatusValidationMessages.title.isString })
  @IsOptional()
  @Length(3, 150, { 'message': (value: ValidationArguments) => UserStatusValidationMessages.title.length(value) })
  private title: string;

  @IsString({ 'message': UserStatusValidationMessages.description.isString })
  @IsOptional()
  @Length(10, 300, { 'message': (value: ValidationArguments) => UserStatusValidationMessages.description.length(value) })
  private description: string;
}