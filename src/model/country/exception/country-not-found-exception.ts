import { AbstractEntityNotFoundException } from '../../../abstract/exception/abstract-entity-not-found-exception';

export class CountryNotFoundException extends AbstractEntityNotFoundException {

  constructor(id?: string) {
    super(id, 'Country');
  }

}
