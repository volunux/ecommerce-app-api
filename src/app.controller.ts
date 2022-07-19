import { Controller, Get, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EntityManager } from 'typeorm';
import { AppService } from './app.service';
import { ConfigurationProperties } from './configuration/configuration.properties';

@Controller("/api")
export class AppController {
  constructor(private readonly appService: AppService, 
              private configurationProperties: ConfigurationProperties,
              private entityManager: EntityManager) {

  }

  @Get("")
  public async sayHello(): Promise<string> {
    console.log(this.configurationProperties.getGreeting());
    console.log((await this.entityManager.query('SELECT now()')));
    return "Hello World";
  }

}
