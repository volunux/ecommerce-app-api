import { AbstractBaseEntityOne } from '../abstract/AbstractBaseEntityOne';
import { Entity } from 'typeorm';

@Entity("categories")
export class Category extends AbstractBaseEntityOne {

}