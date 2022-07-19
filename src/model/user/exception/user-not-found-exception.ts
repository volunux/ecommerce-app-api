import { AbstractEntityNotFoundException } from '../../../abstract/exception/abstract-entity-not-found-exception';

export class UserNotFoundException extends AbstractEntityNotFoundException {

  constructor(id?: string) {
    super(id, 'User');
  }

}
