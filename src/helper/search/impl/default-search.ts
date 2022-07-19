import { AbstractBaseEntitySearch } from "../abstract/abstract-base-entity-search";

export class DefaultEntitySearch<T> extends AbstractBaseEntitySearch<T> {

  public static getInstance(data: any): DefaultEntitySearch<any> { return new DefaultEntitySearch(); }
}