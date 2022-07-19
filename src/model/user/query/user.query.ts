import { User } from '../user';
import { DynamicQuery } from '../../util/query/util/DynamicQuery';

export class UserQuery {

  public update(id: number, entry: User): DynamicQuery {
    let text: string = ``;
    let values: any[] = [];

    return DynamicQuery.create(text, values);
  }

  public updateStatus(id: number, status: string): DynamicQuery {
    let text: string = ``;
    let values: any[] = [];

    return DynamicQuery.create(text, values);
  }

}