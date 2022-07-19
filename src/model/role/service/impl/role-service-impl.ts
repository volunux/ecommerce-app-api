import { Injectable } from "@nestjs/common";
import { AbstractEntityNotFoundException } from '../../../../abstract/exception/abstract-entity-not-found-exception';
import { Newable } from "../../../../abstract/interface/Newable";
import { AbstractCrudServiceImpl } from "../../../../abstract/service/impl/abstract-crud-service-impl";
import { RoleUpdateDto } from "../../dto/role-update.dto";
import { RoleDto } from '../../dto/role.dto';
import { RoleNotFoundException } from '../../exception/role-not-found-exception';
import { RoleRepositoryImpl } from '../../repository/impl/role-repository-impl';
import { Role } from '../../role';
import { RoleService } from "../role-service.interface";

@Injectable()
export class RoleServiceImpl extends AbstractCrudServiceImpl<Role, RoleDto, RoleUpdateDto> implements RoleService {

  protected override readonly EntityDomain: Newable<any> = Role;
  protected override readonly EntityNotFoundException: Newable<AbstractEntityNotFoundException> = RoleNotFoundException;

  constructor(protected override readonly repository: RoleRepositoryImpl) {
    super();
  }

  async findSomeRoles(ids: number[] | string[]): Promise<Role[]> {
    return this.repository.findSomeRoles(ids)
  }
}
