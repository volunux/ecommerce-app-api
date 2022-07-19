import { User } from '../user';
import { UserDto } from '../dto/user.dto';
import { UserUpdateDto } from '../dto/user-update.dto';
import { CrudService } from '../../../abstract/service/crud-service.interface';

export interface UserService extends CrudService<User, UserDto, UserUpdateDto> {

}
