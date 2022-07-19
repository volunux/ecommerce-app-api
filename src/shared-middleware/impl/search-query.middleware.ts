import { NextFunction, Request, Response } from 'express';
import { SearchParam } from '../model/search-param';

export function SearchQueryMiddleware(req: Request, res: Response, next: NextFunction): void {
    SearchParam.execute(req, res, next);
    return next();
}
