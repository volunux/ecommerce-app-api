import { ValidationMessage } from '../../../validation/validation.message';
import { ValidationMessagePropertyHelper } from '../../../validation/validation.message.property.helper';

export class UserStatusValidationMessages extends ValidationMessagePropertyHelper {

  protected static entityName: string = 'User Status';
  public static readonly title: ValidationMessage = this.getPropString('Title');
  public static readonly description: ValidationMessage = this.getPropString('Description')
}