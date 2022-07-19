import { Order } from "../order";
import { CrudRepository } from 'src/abstract/repository/crud-repository.interface';

export interface OrderRepository extends CrudRepository<Order> {
}
