import { Injectable } from "@nestjs/common";
import { Newable } from "../../../../abstract/interface/Newable";
import { AbstractCrudServiceImpl } from "../../../../abstract/service/impl/abstract-crud-service-impl";
import { OrderStatusDto } from '../../dto/order.status.dto';
import { OrderStatusUpdateDto } from "../../dto/order.status.update.dto";
import { OrderStatusNotFoundException } from '../../exception/order-status-not-found-exception';
import { OrderStatus } from '../../order-status';
import { OrderStatusRepositoryImpl } from '../../repository/impl/order-status-repository-impl';
import { OrderStatusService } from "../order-status-service.interface";

@Injectable()
export class OrderStatusServiceImpl extends AbstractCrudServiceImpl<OrderStatus, OrderStatusDto, OrderStatusUpdateDto> implements OrderStatusService {

  protected override readonly EntityDomain: Newable<any> = OrderStatus;
  protected override readonly EntityNotFoundException: Newable<OrderStatusNotFoundException> = OrderStatusNotFoundException;

  constructor(protected override repository: OrderStatusRepositoryImpl) {
    super();
  }
}
