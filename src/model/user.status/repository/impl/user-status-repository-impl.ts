import { Injectable } from "@nestjs/common";
import { AbstractCrudRepositoryImpl } from '../../../../abstract/repository/impl/abstract-crud-repository-impl';
import { DefaultEntitySearch } from '../../../../helper/search/impl/default-search';
import { Newable } from "../../../entity/interface/Newable";
import { UserStatus } from "../../user.status";
import { UserStatusRepository } from "../user-status-repository.interface";

@Injectable()
export class UserStatusRepositoryImpl extends AbstractCrudRepositoryImpl<UserStatus> implements UserStatusRepository {

  protected override readonly EntityDomain: Newable<any> = UserStatus;
  protected override readonly search: DefaultEntitySearch<UserStatus> = DefaultEntitySearch.getInstance({});

}
