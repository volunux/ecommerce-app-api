import { Injectable } from "@nestjs/common";
import { Newable } from "src/model/entity/interface/Newable";
import { AbstractCrudRepositoryImpl } from '../../../../abstract/repository/impl/abstract-crud-repository-impl';
import { OrderSearch } from '../../../../helper/search/impl/order-search';
import { Order } from "../../order";
import { OrderRepository } from "../order-repository.interface";

@Injectable()
export class OrderRepositoryImpl extends AbstractCrudRepositoryImpl<Order> implements OrderRepository {

  protected override readonly EntityDomain: Newable<any> = Order;
  protected override search: OrderSearch = OrderSearch.getInstance();
}
