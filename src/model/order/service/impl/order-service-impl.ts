import { Injectable } from "@nestjs/common";
import { Newable } from "src/abstract/interface/Newable";
import { AbstractCrudServiceImpl } from '../../../../abstract/service/impl/abstract-crud-service-impl';
import { OrderUpdateDto } from "../../dto/order-update.dto";
import { OrderDto } from '../../dto/order.dto';
import { OrderNotFoundException } from '../../exception/order-not-found-exception';
import { Order } from '../../order';
import { OrderRepositoryImpl } from '../../repository/impl/order-repository-impl';
import { OrderService } from "../order-service.interface";

@Injectable()
export class OrderServiceImpl extends AbstractCrudServiceImpl<Order, OrderDto, OrderUpdateDto> implements OrderService {

  protected override readonly EntityDomain: Newable<any> = Order;
  protected override readonly EntityNotFoundException: Newable<OrderNotFoundException> = OrderNotFoundException;

  constructor(protected readonly repository: OrderRepositoryImpl) {
    super();
  }
}
