import { CrudService } from '../../../abstract/service/crud-service.interface';
import { RoleUpdateDto } from '../dto/role-update.dto';
import { RoleDto } from '../dto/role.dto';
import { Role } from '../role';

export interface RoleService extends CrudService<Role, RoleDto, RoleUpdateDto> {

}
