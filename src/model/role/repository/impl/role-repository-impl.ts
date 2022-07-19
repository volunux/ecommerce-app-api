import { Injectable } from "@nestjs/common";
import { AbstractCrudRepositoryImpl } from '../../../../abstract/repository/impl/abstract-crud-repository-impl';
import { DefaultEntitySearch } from '../../../../helper/search/impl/default-search';
import { Newable } from "../../../entity/interface/Newable";
import { Role } from "../../role";
import { RoleRepository } from "../role-repository.interface";

@Injectable()
export class RoleRepositoryImpl extends AbstractCrudRepositoryImpl<Role> implements RoleRepository {

  protected override readonly EntityDomain: Newable<any> = Role;
  protected override readonly search: DefaultEntitySearch<Role> = DefaultEntitySearch.getInstance({});

  async findSomeRoles(ids: number[] | string[]): Promise<Role[]> {
    return this.repository.findByIds(ids);
  }

}
