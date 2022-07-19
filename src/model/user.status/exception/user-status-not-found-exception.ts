import { AbstractEntityNotFoundException } from '../../../abstract/exception/abstract-entity-not-found-exception';

export class UserStatusNotFoundException extends AbstractEntityNotFoundException {

  constructor(id?: string) {
    super(id, 'User Status');
  }

}
