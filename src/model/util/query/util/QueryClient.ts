import Query from './Query';
import { CrudRepository } from 'src/model/abstract/repository/base/Repository';

export default interface QueryClient extends Query {

  beginTransaction(facade: CrudRepository<any>[], context?: any): Promise<void>;
  endTransaction(facade?: CrudRepository<any>): Promise<void>;
  commit(facade?: CrudRepository<any>): Promise<void>;
  rollback(facade?: CrudRepository<any>): Promise<void>;
}