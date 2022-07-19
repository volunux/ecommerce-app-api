export abstract class AbstractException extends Error {

  public statusCode: number;
  public message: string;
  public entityName: string;

  constructor(message?: string, entityName?: string, statusCode?: number) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.statusCode = statusCode ? statusCode : 0;
    this.message = message ? message : 'Error';
    this.entityName = entityName ? entityName : 'Unknown';
  }

  public getStatusCode(): number {
    return this.statusCode;
  }

  public getMessage(): string {
    return this.message;
  }

  public getEntityName(): string {
    return this.entityName;
  }

}