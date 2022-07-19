import { Injectable, Optional } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigurationProperties {

  constructor(private configService: ConfigService | null) {

  }

  public getPort(): number {
    return +this.configService.get<number>('port');
  }

  public getGreeting(): string {
    return this.configService.get<string>('greeting');
  }

  public getDatabaseName(): string {
    return this.configService.get<string>('database.name');
  }

  public getDatabaseHost(): string {
    return this.configService.get<string>('database.host');
  }

  public getDatabasePort(): number {
    return this.configService.get<number>('database.port');
  }

  public isDatabaseSynchronize(): boolean {
    return this.configService.get<boolean>('database.synchronize');
  }

  public getDatabaseUsername(): string {
    return this.configService.get<string>('database.username');
  }

  public getDatabasePassword(): string {
    return this.configService.get<string>('database.password');
  }

}
