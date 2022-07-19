import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './role';
import { RoleRepositoryImpl } from './repository/impl/role-repository-impl';
import { RoleServiceImpl } from './service/impl/role-service-impl';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  controllers: [RoleController],
  providers: [RoleServiceImpl, RoleRepositoryImpl],
exports: [TypeOrmModule, RoleServiceImpl, RoleRepositoryImpl]
})
export class RoleModule { }
