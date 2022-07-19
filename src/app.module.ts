import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './configuration/configuration.module';
import { DatabaseModule } from './database/database.module';
import { ExceptionModule } from './exception/exception.module';
import { InterceptorModule } from './interceptor/interceptor.module';
import { CategoryModule } from './model/category/category.module';
import { CountryModule } from './model/country/country.module';
import { OrderStatusModule } from './model/order.status/order.status.module';
import { OrderModule } from './model/order/order.module';
import { ProductReviewModule } from './model/product.review/product.review.module';
import { ProductModule } from './model/product/product.module';
import { RoleModule } from './model/role/role.module';
import { UserStatusModule } from './model/user.status/user.status.module';
import { UserModule } from './model/user/user.module';
import { SearchQueryMiddleware } from './shared-middleware/impl/search-query.middleware';
import { SharedMiddlewareModule } from './shared-middleware/shared-middleware.module';


@Module({
  imports: [
    ConfigurationModule,
    DatabaseModule, ProductModule,
    ProductReviewModule,
    OrderModule,
    CategoryModule,
    CountryModule,
    OrderStatusModule,
    UserModule,
    InterceptorModule,
    ExceptionModule,
    UserStatusModule,
    RoleModule,
    SharedMiddlewareModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SearchQueryMiddleware)
      .forRoutes({ 'path': '*', method: RequestMethod.GET });
  }

}
