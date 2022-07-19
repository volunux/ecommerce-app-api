import { IsArray, IsEmail, IsNumber, IsOptional, IsString, Length, ValidationArguments } from '@nestjs/class-validator';
import { UserValidationMessages } from './user-validation-messages';

export class UserUpdateDto {

  @IsString({ 'message': UserValidationMessages.firstName.isString })
  @IsOptional()
  @Length(1, 20, { 'message': (value: ValidationArguments) => UserValidationMessages.firstName.length(value) })
  private firstName: string;

  @IsString({ 'message': UserValidationMessages.middleName.isString })
  @IsOptional()
  @Length(1, 20, { 'message': (value: ValidationArguments) => UserValidationMessages.middleName.length(value) })
  private middleName: string;

  @IsString({ 'message': UserValidationMessages.lastName.isString })
  @IsOptional()
  @Length(1, 20, { 'message': (value: ValidationArguments) => UserValidationMessages.lastName.length(value) })
  private lastName: string;

  @IsString({ 'message': UserValidationMessages.mobilePhone.isString })
  @IsOptional()
  @Length(1, 15, { 'message': (value: ValidationArguments) => UserValidationMessages.mobilePhone.length(value) })
  private mobilePhone: string;

  @IsString({ 'message': UserValidationMessages.emailAddress.isString })
  @IsOptional()
  @Length(5, 50, { 'message': (value: ValidationArguments) => UserValidationMessages.emailAddress.length(value) })
  @IsEmail({ 'require_tld': true }, { 'message': UserValidationMessages.emailAddress.isEmail })
  private emailAddress: string;

  @IsString({ 'message': UserValidationMessages.password.isString })
  @IsOptional()
  @Length(1, 500, { 'message': (value: ValidationArguments) => UserValidationMessages.password.length(value) })
  private password: string;

  @IsArray({ 'message': UserValidationMessages.role.isArray })
  @IsOptional()
  private roles: number[];

  @IsOptional()
  @IsNumber({ 'allowNaN': false }, { 'message': UserValidationMessages.userStatusId.isNumber })
  private userStatusId: number;

  @IsOptional()
  @IsNumber({ 'allowNaN': false }, { 'message': UserValidationMessages.countryId.isNumber })
  private countryId: number;

  public getFirstName(): string {
    return this.firstName;
  }

  public getMiddleName(): string {
    return this.middleName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public getMobilePhone(): string {
    return this.mobilePhone;
  }

  public getEmailAddress(): string {
    return this.emailAddress;
  }

  public getPassword(): string {
    return this.password;
  }

  public getRoles(): number[] {
    return this.roles;
  }

  public getUserStatusId(): number {
    return this.userStatusId;
  }

  public getCountryId(): number {
    return this.countryId;
  }

}