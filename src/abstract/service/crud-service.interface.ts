import { SearchParam } from '../../shared-middleware/model/search-param';

export interface CrudService<T, B, U> {

  findOne(id: string): Promise<T | null>;

  findAll(searchParam: SearchParam): Promise<T[]>;

  create(entry: B | T): Promise<T | null>;

  insert(entry: B | T): Promise<boolean>;

  updateOne(id: string, entry: U | T): Promise<T | null>;

  deleteOne(id: string): Promise<boolean>;

  existsOne(id: string): Promise<boolean>;

  addMany(entries: B[] | T[]): Promise<T[]>;

  deleteMany(ids: string[]): Promise<boolean>;

  deleteAll(): Promise<boolean>;

  findAndDeleteAll(): Promise<boolean>;

}
