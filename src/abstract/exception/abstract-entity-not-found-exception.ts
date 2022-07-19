import { HttpStatus, NotFoundException } from '@nestjs/common';

export class AbstractEntityNotFoundException extends NotFoundException {

  constructor(id?: string, entityName: string = "Unknown") {
    super({
      'description': `The ${entityName} entity with id ${id} cannot be found or retrieved`,
      'statusCode': HttpStatus.NOT_FOUND,
      'entityName': entityName,
      'timestamp': new Date().toISOString()
    });
  }

}
