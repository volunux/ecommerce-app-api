import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user';
import { UserServiceImpl } from './service/impl/user-service-impl';
import { UserRepositoryImpl } from './repository/impl/user-repository-impl';
import { RoleModule } from '../role/role.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), RoleModule],
  controllers: [UserController],
  providers: [UserServiceImpl, UserRepositoryImpl],
  exports: [TypeOrmModule]
})
export class UserModule {}
