import { existsSync } from "fs";
import { resolve } from "path";
import * as Joi from 'joi';

export class ConfigurationPropertiesHelper {

  public static getEnvPath(destination: string): string {
    const env: string | undefined = process.env.NODE_ENV;
    const alternateDestination: string = resolve(`${destination}/.env`);
    const filename: string = env ? `${env}.env` : `development.env`;
    let filePath: string = resolve(`${destination}/${filename}`);

    console.log(filePath);

    if (!existsSync(filePath)) {
      filePath = alternateDestination;
    }

    return filePath;
  } 

  public static validationSchema(): Joi.ObjectSchema {
    
    return Joi.object({
      NODE_ENV: Joi.string().required().valid(
        'development',
        'production'
      ).default('development'),
      port: Joi.number().required().default(4000)
    });
  }
}
