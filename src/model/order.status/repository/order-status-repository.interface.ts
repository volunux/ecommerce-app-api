import { CrudRepository } from "../../../abstract/repository/crud-repository.interface";
import { OrderStatus } from "../order-status";

export interface OrderStatusRepository extends CrudRepository<OrderStatus> {
}
