import { Pool, PoolClient, QueryResult } from 'pg';
import Query from './Query';

export default class DataSource implements Query {

  private static getPool(): any { return {}; }

  public execute(text: string, params: string[]): Promise<QueryResult> { return DataSource.getPool().query(text, params); }

  static getClient(): Promise<PoolClient> { return DataSource.getPool().connect(); }

  public getOriginalDataSource(): Query {
    let query: Query = Object.assign({}, this);
    Object.setPrototypeOf(query, Object.getPrototypeOf(this));
    return query;
  }
}