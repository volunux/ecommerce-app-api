import { SelectQueryBuilder , Like } from 'typeorm';
import { User } from '../../../model/user/user';
import { SearchParam } from '../../../shared-middleware/model/search-param';
import { AbstractStatusEntitySearch } from '../abstract/abstract-status-entity-search';

export class UserSearch extends AbstractStatusEntitySearch<User> {

  public static getInstance() : UserSearch { return new UserSearch(); }

  public emailAddress(qb : SelectQueryBuilder<User> , sP : SearchParam) : void {
    let emailAddress : string = (<string>sP.get('search'));
    emailAddress = emailAddress.toLowerCase();
    qb.where({'emailAddress' : Like(`%${emailAddress}%`)});
  }

}