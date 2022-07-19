import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpStatus, ValidationError } from '@nestjs/common';

export class ValidationException extends BadRequestException {
  constructor(public validationErrors: any) {
    super();
  }
}

@Catch(ValidationException)
export class ValidationFilter implements ExceptionFilter {
  catch(exception: ValidationException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse();

    return response.status(HttpStatus.BAD_REQUEST).json({
      'statusCode': HttpStatus.BAD_REQUEST,
      'success': false,
      'errors': (<ValidationException>exception).validationErrors,
      'errorType': 'dataValidation'
    
    });
  }

  public static exceptionFactory(errors: ValidationError[]) {
    const errorMessages: any = {};
    errors.forEach((err: ValidationError) => {
      errorMessages[err.property] = [...Object.values(err.constraints)];
    });
    return new ValidationException(errorMessages);
  }
}
