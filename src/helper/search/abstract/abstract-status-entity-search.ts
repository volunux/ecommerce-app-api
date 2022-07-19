import { SelectQueryBuilder } from 'typeorm';
import { SearchParam } from '../../../shared-middleware/model/search-param';
import { AbstractBaseEntitySearch } from './abstract-base-entity-search';

export abstract class AbstractStatusEntitySearch<T> extends AbstractBaseEntitySearch<T> {

  protected statusAlias: string = 'st.name';

  constructor() { super(); }

  public status(qb: SelectQueryBuilder<T>, sP: SearchParam): void {
    let status: string | string[] = (<string>sP.get('search'));

    if ((!Array.isArray(status)) && status.trim() === "") { }
    
    else if (Array.isArray(status)) { 
      status = status
        .map((s: string) => { 
          return '\'' + s[0].toUpperCase() + s.slice(1).toLowerCase() + '\''; })
        .join(' , '); }
    
        else { status = '\'' + status + '\''; }

    qb.andWhere(`st.name IN (${status})`);
  }
}