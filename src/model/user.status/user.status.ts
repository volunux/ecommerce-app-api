import { Entity } from 'typeorm';
import { AbstractBaseEntityOne } from '../abstract/AbstractBaseEntityOne';

@Entity("user_statuses")
export class UserStatus extends AbstractBaseEntityOne {

}
