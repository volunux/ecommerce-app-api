import { isNotEmpty, ValidationArguments } from '@nestjs/class-validator';
import { ValidationMessage } from '../../../validation/validation.message';
import { ValidationMessagePropertyHelper } from '../../../validation/validation.message.property.helper';

export class OrderValidationMessages extends ValidationMessagePropertyHelper {

  protected static entityName: string = 'Order';

  public static readonly title: ValidationMessage = this.getPropString('Title');

  public static readonly description: ValidationMessage = this.getPropString('Description')
}