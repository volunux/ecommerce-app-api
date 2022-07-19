import { Module } from '@nestjs/common';
import { OrderStatusController } from './order.status.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderStatus } from './order-status';
import { OrderStatusServiceImpl } from './service/impl/order-status-service-impl';
import { OrderStatusRepositoryImpl } from './repository/impl/order-status-repository-impl';

@Module({
  imports: [TypeOrmModule.forFeature([OrderStatus])],
  controllers: [OrderStatusController],
  providers: [OrderStatusServiceImpl, OrderStatusRepositoryImpl],
  exports: [TypeOrmModule]
})
export class OrderStatusModule {}
