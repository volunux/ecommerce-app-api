import { ValidationArguments } from "@nestjs/class-validator";

export interface ValidationMessage {
  [key: string]: any;
}