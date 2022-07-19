import { Module } from '@nestjs/common';
import { UserStatusController } from './user-status.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserStatus } from './user.status';
import { UserStatusServiceImpl } from './service/impl/user-status-service-impl';
import { UserStatusRepositoryImpl } from './repository/impl/user-status-repository-impl';

@Module({
  imports: [TypeOrmModule.forFeature([UserStatus])],
  controllers: [UserStatusController],
  providers: [UserStatusServiceImpl, UserStatusRepositoryImpl],
  exports: [TypeOrmModule]
})
export class UserStatusModule {}
