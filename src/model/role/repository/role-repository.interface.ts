import { CrudRepository } from "../../../abstract/repository/crud-repository.interface";
import { Role } from "../role";

export interface RoleRepository extends CrudRepository<Role> {
}
