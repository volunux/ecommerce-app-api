import { ValidationMessage } from '../../../validation/validation.message';
import { ValidationMessagePropertyHelper } from '../../../validation/validation.message.property.helper';

export class ProductValidationMessages extends ValidationMessagePropertyHelper {

  protected static entityName: string = 'Product';
  public static readonly title: ValidationMessage = this.getPropString('Title');
  public static readonly description: ValidationMessage = this.getPropString('Description');
  public static readonly price: ValidationMessage = this.getPropInt('Price');
  public static readonly quantity: ValidationMessage = this.getPropInt('Quantity');
  public static readonly shop: ValidationMessage = this.getPropString('Shop');
}