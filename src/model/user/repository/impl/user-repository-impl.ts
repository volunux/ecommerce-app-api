import { Injectable } from "@nestjs/common";
import { createQueryBuilder, EntityManager, getRepository, In, Not } from 'typeorm';
import { AbstractCrudRepositoryImpl } from '../../../../abstract/repository/impl/abstract-crud-repository-impl';
import { UserSearch } from '../../../../helper/search/impl/user-search';
import { Newable } from "../../../entity/interface/Newable";
import { UserRole } from '../../../role/user-role';
import { User } from "../../user";
import { UserRepository } from "../user-repository.interface";

@Injectable()
export class UserRepositoryImpl extends AbstractCrudRepositoryImpl<User> implements UserRepository {

  protected override readonly EntityDomain: Newable<any> = User;
  protected override readonly search: UserSearch = UserSearch.getInstance();

  public async deleteRole(id: number, entry: User): Promise<void> {
    let manager: EntityManager | null = await null;

    manager !== null ? await manager!.createQueryBuilder(`user_role`, `ur`).delete().where({ 'user_id': id, 'role_id': Not(In(entry.getRoles())) }).execute() :
      await createQueryBuilder(`user_role`, `ur`).delete().where({ 'user_id': id, 'role_id': Not(In(entry.getRoles())) }).execute();
  }

  public async findFullNameAndOthers(id: number): Promise<User | null> {
    let entry: User | undefined = await getRepository(User).createQueryBuilder(`vx`).where({ '_id': id }).select([`vx.id`, `vx.first_name`, `vx.last_name`, `vx.email_address`]).limit(1).getOne();
    if (entry !== undefined) return entry;
    else return null;
  }

  public async updateOneRole(id: number): Promise<User | null> {
    let entry: User | undefined = await getRepository(User).createQueryBuilder(`vx`).where({ '_id': id })
        .select([`vx.id`, `vx.first_name`, `vx.last_name`, `vx.email_address`]).limit(1).getOne();

    if (entry !== undefined) return entry;
    else return null;
  }

  public async updateRole(entries: UserRole[]): Promise<void> {
    let manager: EntityManager | null = await null;

    manager !== null ? await manager!.getRepository(UserRole).upsert(entries, {'conflictPaths': [`user_id`, `role_id`], 'skipUpdateIfNoValuesChanged': true }) :
      await this.repository.upsert(entries as any, { 'conflictPaths': [`user_id`, `role_id`], 'skipUpdateIfNoValuesChanged': true });
  }

  public async checkEmailAddress(emailAddress: string): Promise<boolean> {
    let entry: User | undefined = await this.repository.createQueryBuilder(`vx`).where({'emailAddress': emailAddress }).select([`vx.id`]).limit(1).getOne();
    if (entry !== undefined) return true;
    else return false;
  }
}
