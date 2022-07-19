import { AbstractEntityNotFoundException } from '../../../abstract/exception/abstract-entity-not-found-exception';

export class RoleNotFoundException extends AbstractEntityNotFoundException {

  constructor(id?: string) {
    super(id, 'Role');
  }

}
