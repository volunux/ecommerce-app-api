import { UserStatus } from '../user.status';
import { UserStatusDto } from '../dto/user-status.dto';
import { UserStatusUpdateDto } from '../dto/user-status-update.dto';
import { CrudService } from '../../../abstract/service/crud-service.interface';

export interface UserStatusService extends CrudService<UserStatus, UserStatusDto, UserStatusUpdateDto> {

}
