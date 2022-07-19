import { ValidationMessage } from 'src/validation/validation.message';
import { ValidationMessagePropertyHelper } from '../../../validation/validation.message.property.helper';

export class ProductReviewValidationMessages extends ValidationMessagePropertyHelper {

  protected static entityName: string = 'Product Review';
  public static readonly title: ValidationMessage = this.getPropString('Title');
  public static readonly content: ValidationMessage = this.getPropString('Content')
  public static readonly productId: ValidationMessage = this.getPropInt('Product Id')
  public static readonly rating: ValidationMessage = this.getPropInt('Rating')
  public static readonly published: ValidationMessage = this.getPropBool('Published Status')

}
