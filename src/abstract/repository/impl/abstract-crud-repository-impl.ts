import { DeleteResult, getRepository, Repository, SelectQueryBuilder, Entity } from 'typeorm';
import { AbstractBaseEntitySearch } from '../../../helper/search/abstract/abstract-base-entity-search';
import { SearchParam } from '../../../shared-middleware/model/search-param';
import { CrudRepository } from '../crud-repository.interface';
import { Newable } from '../../../model/entity/interface/Newable';
import { ServiceHelper } from 'src/helper/util/ServiceHelper';

export abstract class AbstractCrudRepositoryImpl<T> implements CrudRepository<T> {

  protected abstract readonly search: AbstractBaseEntitySearch<T>;
  protected abstract readonly EntityDomain: Newable<any>;

  async findOne(id: string): Promise<T | null> {
    const $entry: T = await this.repository.findOne(id);
    if ($entry !== undefined) return $entry;
    else return null;
  }

  async findAll(sP: SearchParam): Promise<T[]> {
    let qb: SelectQueryBuilder<T> = this.repository.createQueryBuilder(`vx`);

    if (sP !== null && sP !== undefined) {
      if (sP.get(`type`) === `title`) { this.search.label(qb, sP); }
      else if (sP.exists('updated_min')) { this.search.minDate(qb, sP); }
      else if (sP.exists('updated_max')) { this.search.maxDate(qb, sP); }
    }

    return await qb.select([`vx`]).orderBy(`vx.updatedOn`, `ASC`).addOrderBy(`vx.id`, `ASC`).limit(10).getMany();
  }

  async create(entry: T): Promise<T | null> {
    const $entry: T = await this.repository.save(entry);
    if ($entry !== undefined) return $entry;
    else return null;
  }

  public async insert(entry: T): Promise<boolean> {
    let $entry: T | null = await this.repository.create(entry);
    if ($entry === null) return false;
    return true;
  }

  async updateOne(id: string, entry: T): Promise<T | null> {
    const $entry: T = await this.create(entry);
    if ($entry !== undefined) return $entry;
    else return null;
  }

  async deleteOne(id: string): Promise<boolean> {
    const result: DeleteResult = await this.repository.delete(id);
    if (result.affected > 0) return true;
    else return false;
  }

  async existsOne(id: string): Promise<boolean> {
    let $entry: T = await this.repository.createQueryBuilder(`vx`).where({ 'id': id }).select([`vx.id`]).limit(1).getOne();
    if ($entry !== undefined && $entry !== null) return true;
    else return false;
  }

  async addMany(entries: T[]): Promise<T[]> {
    return this.repository.save(entries);
  }

  async deleteMany(ids: string[]): Promise<boolean> {
    const result: DeleteResult = await this.repository.delete(ids);
    if (result.affected > 0) return true;
    else return false;
  }

  public async deleteAll(): Promise<boolean> {
    const entries: T[] = await this.repository.createQueryBuilder(`vx`).where({}).select([`vx`]).limit(1).getMany();
    if (entries.length > 0) return true;
    else return false; 
  }

  public async findAndDeleteAll(): Promise<boolean> {
    let result: DeleteResult = await this.repository.createQueryBuilder(`vx`).delete().where({}).returning(`id`).execute();
    ServiceHelper.rowsToObjectMapper<T>(<any>result.raw, this.EntityDomain);
    if (result.affected > 0) return true;
    else return false;
  }


  protected get repository(): Repository<any> {
    return getRepository(this.EntityDomain);
  }
}
