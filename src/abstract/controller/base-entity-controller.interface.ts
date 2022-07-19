
export interface BaseEntityController<T, B, U> {

  findAll(searchParam: Object): Promise<T[]>

  findOne(id: string): Promise<T | null>;

  create(entry: B): Promise<T>;

  updateOne(id: string, entry: U): Promise<T>;

  deleteOne(id: string): Promise<boolean>;

  addMany(entries: B[]): Promise<T[]>;

  deleteMany(ids: string[]): Promise<boolean>;

}
