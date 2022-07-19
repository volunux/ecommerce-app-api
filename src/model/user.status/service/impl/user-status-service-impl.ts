import { Injectable } from "@nestjs/common";
import { Newable } from "../../../../abstract/interface/Newable";
import { AbstractCrudServiceImpl } from '../../../../abstract/service/impl/abstract-crud-service-impl';
import { UserStatusUpdateDto } from "../../dto/user-status-update.dto";
import { UserStatusDto } from '../../dto/user-status.dto';
import { UserStatusNotFoundException } from '../../exception/user-status-not-found-exception';
import { UserStatusRepositoryImpl } from '../../repository/impl/user-status-repository-impl';
import { UserStatus } from '../../user.status';
import { UserStatusService } from "../user-status-service.interface";

@Injectable()
export class UserStatusServiceImpl extends AbstractCrudServiceImpl<UserStatus, UserStatusDto, UserStatusUpdateDto> implements UserStatusService {

  protected override readonly EntityDomain: Newable<any> = UserStatus;
  protected override readonly EntityNotFoundException: Newable<UserStatusNotFoundException> = UserStatusNotFoundException;

  constructor(protected override readonly repository: UserStatusRepositoryImpl) {
    super();
  }

}
