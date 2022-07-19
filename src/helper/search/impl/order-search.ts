import { SelectQueryBuilder , Equal , Like } from 'typeorm';
import { SearchParam } from '../../../shared-middleware/model/search-param';
import { AbstractStatusEntitySearch } from '../abstract/abstract-status-entity-search';

export class OrderSearch extends AbstractStatusEntitySearch<any> {

  public reference(qb : SelectQueryBuilder<any> , sP : SearchParam) : void { let reference : string = (<string>sP.get('search'));
    qb.andWhere({'order_reference' : Equal(reference)}); }

  public amount(qb : SelectQueryBuilder<any> , sP : SearchParam) : void { let amount : number = Number.parseInt((<string>sP.get('search')));
   if (amount) qb.andWhere({'amount' : Equal(amount)}); }

  public quantity(qb : SelectQueryBuilder<any> , sP : SearchParam) : void { let quantity : number = Number.parseInt((<string>sP.get('search')));
    if(quantity) qb.andWhere({'quantity' : Equal(quantity)}); }

    public static getInstance() : OrderSearch { return new OrderSearch(); }
}