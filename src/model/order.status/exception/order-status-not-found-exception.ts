import { AbstractEntityNotFoundException } from '../../../abstract/exception/abstract-entity-not-found-exception';

export class OrderStatusNotFoundException extends AbstractEntityNotFoundException {

  constructor(id?: string) {
    super(id, 'Order Status');
  }

}
