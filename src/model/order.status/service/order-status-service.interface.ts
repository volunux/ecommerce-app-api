import { OrderStatus } from '../order-status';
import { OrderStatusDto } from '../dto/order.status.dto';
import { OrderStatusUpdateDto } from '../dto/order.status.update.dto';
import { CrudService } from '../../../abstract/service/crud-service.interface';

export interface OrderStatusService extends CrudService<OrderStatus, OrderStatusDto, OrderStatusUpdateDto> {

}
