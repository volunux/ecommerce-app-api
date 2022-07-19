import { SelectQueryBuilder, Like } from 'typeorm';
import { SearchQueryOptions } from '../common/search-query-options';
import { SearchParam } from '../../../shared-middleware/model/search-param';

export abstract class AbstractBaseEntitySearch<T> {

  protected searchQueryOptions: SearchQueryOptions = SearchQueryOptions.getInstance();
  protected updatedOnAlias: string = 'updatedOn';
  protected nameAlias: string = 'title';

  constructor() { }

  public addQ(key: string, item: string) { this.searchQueryOptions.getSearchQueryConditionOptions().add(key, item); }

  public minDate(qb: SelectQueryBuilder<T>, sP: SearchParam): void {
    let updatedMin: string = (<string>sP.get('updated_min'));
    updatedMin = updatedMin.replace(" 00", "+00");

    let id: number = +(<string>sP.get('entry_id'));
    
    let p: number = +(<string>sP.get(`page`));
    let minId: number = id - 10;
    
    if (p === 1) { }
    else { qb.andWhere(`vx.updatedOn < :updatedOn OR (vx.updatedOn = :updatedOn AND vx.id > :id)`, { 'updatedOn': updatedMin, 'id': minId }); }
  }

  public maxDate(qb: SelectQueryBuilder<T>, sP: SearchParam): void {
    let updatedMax: string = (<string>sP.get('updated_max'));
    updatedMax = updatedMax.replace(" 00", "+00");
    
    let id: string = (<string>sP.get('entry_id'));
    qb.andWhere(`vx.updatedOn > :updatedOn OR (vx.updatedOn = :updatedOn AND vx.id > :id)`, { 'updatedOn': updatedMax, 'id': +id });
  }

  public label(qb: SelectQueryBuilder<T>, sP: SearchParam): void {
    let title: string = (<string>sP.get('search'));
    qb.where({ 'title': Like(`%${title}%`) });
  }
}