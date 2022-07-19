import { Injectable } from "@nestjs/common";
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Newable } from "../../../../abstract/interface/Newable";
import { AbstractCrudServiceImpl } from '../../../../abstract/service/impl/abstract-crud-service-impl';
import { Role } from '../../../role/role';
import { RoleServiceImpl } from '../../../role/service/impl/role-service-impl';
import { UserRole } from '../../../role/user-role';
import { UserUpdateDto } from "../../dto/user-update.dto";
import { UserDto } from '../../dto/user.dto';
import { UserNotFoundException } from '../../exception/user-not-found-exception';
import { UserRepositoryImpl } from '../../repository/impl/user-repository-impl';
import { User } from '../../user';
import { UserHelper } from '../../util/user.helper';
import { UserService } from "../user-service.interface";

@Injectable()
export class UserServiceImpl extends AbstractCrudServiceImpl<User, UserDto, UserUpdateDto> implements UserService {

  protected override readonly EntityDomain: Newable<any> = User;
  protected override readonly EntityNotFoundException: Newable<UserNotFoundException> = UserNotFoundException;

  constructor(protected override readonly repository: UserRepositoryImpl, protected readonly roleService: RoleServiceImpl) {
    super();
  }

  override async create(entry: UserDto): Promise<User> {
    
    const $entry: User = plainToInstance(User, instanceToPlain(entry));
    UserHelper.setPassword($entry);

    const roles: Role[] = await this.roleService.findSomeRoles(entry.getRoles());
    $entry.setUserRoles(roles);
    
    return this.repository.create($entry);
  }

  override async updateOne(id: string, entry: UserUpdateDto): Promise<User> {

    const existingEntry: User = await this.findOne(id);
    existingEntry.setRoles(entry.getRoles());
    const $entry: User = await this.repository.updateOne(id, { ...existingEntry, ...entry } as any);

    await this.deleteRole(existingEntry);
    await this.updateRole(existingEntry);
    return $entry;
  }

  async deleteRole(entry: User): Promise<void> {
    this.repository.deleteRole(entry.getId(), entry);
    return;
  }

  public async updateRole(entry: User): Promise<void> {
    const roles: UserRole[] = [];

    if (entry.getRoles() != null && entry.getRoles().length > 0) {
    
      for (let i = 0; i < entry.getRoles().length; i++) {
    
        const userRole: UserRole = new UserRole();
        userRole.setUserId(entry.getId());
        userRole.setRoleId(entry.getRoles()[i]);
        roles.push(userRole);
      }
    }

    await this.repository.updateRole(roles);
  }

}
