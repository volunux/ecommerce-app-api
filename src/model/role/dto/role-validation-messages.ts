import { ValidationMessage } from '../../../validation/validation.message';
import { ValidationMessagePropertyHelper } from '../../../validation/validation.message.property.helper';


export class RoleValidationMessages extends ValidationMessagePropertyHelper {
  
  protected static override entityName: string = 'Role';

  public static readonly title: ValidationMessage = this.getPropString('Title');
  public static readonly word: ValidationMessage = this.getPropString('Word');
  public static readonly description: ValidationMessage = this.getPropString('Description')
}
