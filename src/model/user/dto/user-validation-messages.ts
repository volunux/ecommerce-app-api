import { ValidationMessage } from '../../../validation/validation.message';
import { ValidationMessagePropertyHelper } from '../../../validation/validation.message.property.helper';

export class UserValidationMessages extends ValidationMessagePropertyHelper {

  protected static entityName: string = 'User';

  public static readonly firstName: ValidationMessage = this.getPropString('First Name');
  public static readonly lastName: ValidationMessage = this.getPropString('Last Name');
  public static readonly middleName: ValidationMessage = this.getPropString('Middle Name');
  public static readonly emailAddress: ValidationMessage = this.getPropString('Email Address');
  public static readonly mobilePhone: ValidationMessage = this.getPropString('Mobile Phone');
  public static readonly password: ValidationMessage = this.getPropString('Password');
  public static readonly role: ValidationMessage = this.getPropArray('Roles');
  public static readonly userStatusId: ValidationMessage = this.getPropInt('User Status');
  public static readonly countryId: ValidationMessage = this.getPropInt('Country');

}