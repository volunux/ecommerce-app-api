import { ValidationMessage } from '../../../validation/validation.message';
import { ValidationMessagePropertyHelper } from '../../../validation/validation.message.property.helper';

export class CategoryValidationMessages extends ValidationMessagePropertyHelper {

  protected static entityName: string = 'Category';
  public static readonly title: ValidationMessage = this.getPropString('Title');
  public static readonly description: ValidationMessage = this.getPropString('Description')
}