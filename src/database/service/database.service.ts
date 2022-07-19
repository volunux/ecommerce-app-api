import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Category } from "src/model/category/category";
import { Country } from "src/model/country/country";
import { OrderStatus } from "src/model/order.status/order-status";
import { Order } from "src/model/order/order";
import { OrderItem } from "src/model/order/order.item";
import { ProductReview } from "src/model/product.review/product-review";
import { User } from "src/model/user/user";
import { ConfigurationProperties } from '../../configuration/configuration.properties';
import { Product } from '../../model/product/product';
import { Role } from '../../model/role/role';
import { UserStatus } from '../../model/user.status/user.status';
import { UserRole } from '../../model/role/user-role';

@Injectable()
export class DatabaseService implements TypeOrmOptionsFactory {

  constructor(private configuratiionProperties: ConfigurationProperties) {}

  public createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: 'postgres',
      host: this.configuratiionProperties.getDatabaseHost(),
      port: this.configuratiionProperties.getDatabasePort(),
      username: this.configuratiionProperties.getDatabaseUsername(),
      password: this.configuratiionProperties.getDatabasePassword(),
      synchronize: this.configuratiionProperties.isDatabaseSynchronize(),
      database: this.configuratiionProperties.getDatabaseName(),
      entities: [Product, Country, OrderStatus, ProductReview, Order, OrderItem, User, UserStatus, Role, UserRole, Category],
      autoLoadEntities: true,
      logging: true
    }
  }
}
