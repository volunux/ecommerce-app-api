import { ParsedQs } from 'qs';

export interface SearchQueryParam {
  init(params: ParsedQs): SearchQueryParam;
  exists(porameter: string): boolean;
  get(parameter: string): string | string[] | null;
  getAll(): Map<string, string | string[]>;
  getSome(parameter: string): string[] | null;
}