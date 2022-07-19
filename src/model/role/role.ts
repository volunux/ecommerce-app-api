import { Column, Entity } from 'typeorm';
import { AbstractBaseEntityOne } from '../abstract/AbstractBaseEntityOne';

@Entity("roles")
export class Role extends AbstractBaseEntityOne {

  constructor(data?: any) {
    super(data);
    if (data) {
      this.word = data.word || undefined;
    }
  }

  @Column({
    'type': 'varchar',
    'length': 150
  })
  private word: string;

}
