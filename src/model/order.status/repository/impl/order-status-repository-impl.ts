import { Injectable } from "@nestjs/common";
import { AbstractCrudRepositoryImpl } from '../../../../abstract/repository/impl/abstract-crud-repository-impl';
import { Newable } from "../../../entity/interface/Newable";
import { OrderStatus } from "../../order-status";
import { OrderStatusRepository } from "../order-status-repository.interface";
import { DefaultEntitySearch } from '../../../../helper/search/impl/default-search';

@Injectable()
export class OrderStatusRepositoryImpl extends AbstractCrudRepositoryImpl<OrderStatus> implements OrderStatusRepository {

  protected override readonly EntityDomain: Newable<any> = OrderStatus;
  protected override readonly search: DefaultEntitySearch<OrderStatus> = DefaultEntitySearch.getInstance({});

}
