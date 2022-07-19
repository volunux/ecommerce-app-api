import { AbstractEntityNotFoundException } from '../../../abstract/exception/abstract-entity-not-found-exception';

export class ProductNotFoundException extends AbstractEntityNotFoundException {

  constructor(id?: string) {
    super(id, 'Product');
  }

}
