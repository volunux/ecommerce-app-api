import { Express } from 'express';
import { Session , SessionData } from 'express-session';
import { SearchQueryParam } from '../../middleware/interface/search-query-param.interface';

declare global {
	namespace Express {
		interface Request {
			user : Express.User;
			flash : any;
			validationErrorTypeList : Set<string>;
			searchParam : SearchQueryParam;
			bindingModel  : Object | null;
			multipartFile : Object;
		}
	}

}