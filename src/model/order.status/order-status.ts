import { Entity } from 'typeorm';
import { AbstractBaseEntityOne } from '../abstract/AbstractBaseEntityOne';

@Entity("order_status")
export class OrderStatus extends AbstractBaseEntityOne {
  
}
