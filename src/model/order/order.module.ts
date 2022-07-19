import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order';
import { OrderServiceImpl } from './service/impl/order-service-impl';
import { OrderRepositoryImpl } from './repository/impl/order-repository-impl';

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  controllers: [OrderController],
  providers: [OrderServiceImpl, OrderRepositoryImpl]
})
export class OrderModule {

}
