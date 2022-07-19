import { Order } from '../order';
import { OrderDto } from '../dto/order.dto';
import { OrderUpdateDto } from '../dto/order-update.dto';
import { CrudService } from 'src/abstract/service/crud-service.interface';

export interface OrderService extends CrudService<Order, OrderDto, OrderUpdateDto> {

}
