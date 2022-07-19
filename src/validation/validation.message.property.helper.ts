import { ValidationArguments } from '@nestjs/class-validator';
import { ValidationMessage } from './validation.message';

export abstract class ValidationMessagePropertyHelper {

  protected static entityName: string = null;

  public static getPropInt(propertyName: string): ValidationMessage {
    return {
      'isNumber': `${propertyName} of ${this.entityName} should be a number or integer.`,
      'isNotEmpty': `${propertyName} of ${this.entityName} cannot be empty.`
    };
  } 

  public static getPropBool(propertyName: string): ValidationMessage {
    return {
      'isBoolean': `${propertyName} of ${this.entityName} should be a boolean.`,
      'isNotEmpty': `${propertyName} of ${this.entityName} cannot be empty.`
    };
  } 

  public static getPropArray(propertyName: string): ValidationMessage {
    return {
      'isArray': `${propertyName} of ${this.entityName} should be an array or list.`,
      'isNotEmpty': `${propertyName} of ${this.entityName} cannot be empty.`
    };
  } 

  public static getPropString(propertyName: string): ValidationMessage {
    return {
      'isString': `${propertyName} of ${this.entityName} should be a text or string.`,
      'isNotEmpty': `${propertyName} of ${this.entityName} cannot be empty.`,
      'length': (value: ValidationArguments) => `${propertyName} of ${this.entityName} cannot be less than ${value.constraints[0]} and greater than ${value.constraints[1]} characters in length.`,
      'isEmail': (value: ValidationArguments) => `${propertyName} (${value.value ? value.value : "nil"}) of ${this.entityName} is not a valid and should be like for example dave@example.com`
    };
  } 
}