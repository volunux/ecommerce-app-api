import { SearchQueryParam } from "../interface/search-query-param.interface";
import { ParsedQs } from 'qs';
import { NextFunction, Request, Response } from "express";

export class SearchParam implements SearchQueryParam {

  private parameterList: Map<string, string | string[]> = new Map<string, string | string[]>();

  public init(parameters: ParsedQs): SearchQueryParam {
    for (let key in parameters) {
      let value: string | string[] = parameters[key] as string | string[];
      this.parameterList.set(key, value);
    }
    return this;
  }

  public exists(parameter: string): boolean {
    let param: string | string[] | undefined = this.parameterList.get(parameter);
    if (param !== null && param !== undefined && param !== 'null' && param !== 'undefined') { return true; }
    else { return false; }
  }

  public getAll(): Map<string, string | string[]> {
    return this.parameterList;
  }

  public get(parameter: string): string | string[] | null {
    let param: string | string[] | undefined = this.parameterList.get(parameter);
    if (param !== null && param !== undefined) {
      if (typeof param == 'object') { return param; }
      else if (param !== 'null' && param !== 'undefined') { return param; }
      else { return null; }
    }
    else { return null; }
  }

  public getSome(parameter: string): string[] | null {
    let param: string | string[] | undefined = this.parameterList.get(parameter);
    if (param !== null && param !== undefined) { return <string[]>param; }
    else if (param !== 'null' && param !== 'undefined') { return <string[]>param; }
    else { return null; }
  }

  public static execute(req: Request, res: Response, next: NextFunction): void {
    let searchParam: SearchQueryParam = new SearchParam();
    req.query = { ...req.query, ...req.body };
    req.body.$searchParam = searchParam.init(req.query);
  }
}
