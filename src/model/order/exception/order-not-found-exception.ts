import { AbstractEntityNotFoundException } from '../../../abstract/exception/abstract-entity-not-found-exception';

export class OrderNotFoundException extends AbstractEntityNotFoundException {

  constructor(id?: string) {
    super(id, 'Order');
  }

}
