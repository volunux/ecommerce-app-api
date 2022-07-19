import { Global, Module } from '@nestjs/common';
import { DatabaseService } from './service/database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigurationModule } from '../configuration/configuration.module';

@Global()
@Module({
  imports: [TypeOrmModule.forRootAsync({
    imports: [DatabaseModule],
    useExisting: DatabaseService
  })],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {

}
