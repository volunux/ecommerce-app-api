import { instanceToPlain, plainToInstance } from 'class-transformer';
import { AbstractCrudRepositoryImpl } from 'src/abstract/repository/impl/abstract-crud-repository-impl';
import { SearchParam } from '../../../shared-middleware/model/search-param';
import { AbstractEntityNotFoundException } from '../../exception/abstract-entity-not-found-exception';
import { Newable } from '../../interface/Newable';
import { CrudRepository } from '../../repository/crud-repository.interface';
import { CrudService } from '../crud-service.interface';

export abstract class AbstractCrudServiceImpl<T, B, U> implements CrudService<T, B, U> {

  protected abstract EntityNotFoundException: Newable<AbstractEntityNotFoundException>; 
  protected abstract EntityDomain: Newable<any>;
  protected abstract repository: AbstractCrudRepositoryImpl<T>;

  async findOne(id: string): Promise<T> {
    const entry: T = await this.repository.findOne(id);
    if (entry === null) throw new this.EntityNotFoundException(id);
    return entry;
  }

  async findAll(searchParam: SearchParam): Promise<T[]> {
    return this.repository.findAll(searchParam);
  }

  async create(entry: B | T): Promise<T> {
    const $entry: T = plainToInstance(this.EntityDomain, instanceToPlain(entry));
    return this.repository.create($entry);
  }

  async insert(entry: B | T): Promise<boolean> {
    const $entry: T = plainToInstance(this.EntityDomain, instanceToPlain(entry));
    return this.repository.insert($entry);
  }

  async updateOne(id: string, entry: U): Promise<T> {
    const existingEntry: T = await this.findOne(id);
    if (entry === null) throw new this.EntityNotFoundException(id);
    return this.repository.updateOne(id, { ...existingEntry, ...entry } as any);
  }

  async deleteOne(id: string): Promise<boolean> {
    const entry: T = await this.repository.findOne(id);
    if (entry === null) throw new this.EntityNotFoundException(id);
    return this.repository.deleteOne(id);
  }

  async existsOne(id: string): Promise<boolean> {
    return this.repository.existsOne(id);
  }

  async addMany(entries: B[] | T[]): Promise<T[]> {
    const $entries: T[] = entries.map((entry: B | T) => plainToInstance(this.EntityDomain, instanceToPlain(entry)));
    return this.repository.addMany($entries);
  }

  async deleteMany(ids: string[]): Promise<boolean> {
    return this.repository.deleteMany(ids);
  }

  async deleteAll(): Promise<boolean> {
    return this.repository.deleteAll();
  }

  async findAndDeleteAll(): Promise<boolean> {
    return this.repository.findAndDeleteAll();
  }
}
