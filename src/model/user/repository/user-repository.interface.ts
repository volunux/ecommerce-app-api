import { CrudRepository } from "../../../abstract/repository/crud-repository.interface";
import { UserRole } from "../../role/user-role";
import { User } from "../user";

export interface UserRepository extends CrudRepository<User> {

  updateOneRole(id: number): Promise<User | null>;

  updateRole(entries: UserRole[]): Promise<void>;

  checkEmailAddress(emailAddress: string): Promise<boolean>;

  findFullNameAndOthers(id: number): Promise<User | null>;

  deleteRole(id: number, entry: User): Promise<void>;

}
