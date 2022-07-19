import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigurationProperties } from './configuration.properties';
import { ConfigurationPropertiesHelper } from './configuration.properties.helper';
 
const envFilePath: string = ConfigurationPropertiesHelper.getEnvPath(`${process.cwd()}/envs`);

@Global()
@Module({
  imports: [ConfigModule.forRoot({
    envFilePath,
    cache: true,
    validationSchema: ConfigurationPropertiesHelper.validationSchema(),
    validationOptions: {
      allowUnknown: true,
      abortEarly: false
    }
  })],
  providers: [ConfigurationProperties],
  exports: [ConfigurationProperties]
})
export class ConfigurationModule {

}
