import { SearchParam } from '../../shared-middleware/model/search-param';

export interface CrudRepository<T> {

  findOne(id: string): Promise<T | null>;

  findAll(searchParam: SearchParam): Promise<T[]>;

  create(entry: T): Promise<T | null>;

  insert(entry: T): Promise<boolean>;

  updateOne(id: string, entry: T): Promise<T | null>;

  deleteOne(id: string): Promise<boolean>;

  existsOne(id: string): Promise<boolean>;

  addMany(entries: T[]): Promise<T[]>;

  deleteMany(ids: string[]): Promise<boolean>;

  deleteAll(): Promise<boolean>;

  findAndDeleteAll(): Promise<boolean>;
}
