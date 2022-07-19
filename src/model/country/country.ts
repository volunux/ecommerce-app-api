import { Entity } from 'typeorm';
import { AbstractBaseEntityOne } from '../abstract/AbstractBaseEntityOne';

@Entity("countries")
export class Country extends AbstractBaseEntityOne {
  
}
