import { AbstractEntityNotFoundException } from '../../../abstract/exception/abstract-entity-not-found-exception';

export class CategoryNotFoundException extends AbstractEntityNotFoundException {

  constructor(id?: string) {
    super(id, 'Category');
  }

}
