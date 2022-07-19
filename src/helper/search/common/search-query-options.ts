import { SearchQueryJoinOptions } from './search-query-join-options';
import { SearchQueryConditionOptions } from './search-query-conidtion-options';
export class SearchQueryOptions {

	private searchQueryJoinOptions : SearchQueryJoinOptions = new SearchQueryJoinOptions();
	private searchQueryConditionOptions : SearchQueryConditionOptions = new SearchQueryConditionOptions();

	public getSearchQueryJoinOptions() : SearchQueryJoinOptions { return this.searchQueryJoinOptions; }
	public getSearchQueryConditionOptions() : SearchQueryConditionOptions { return this.searchQueryConditionOptions; }
	public static getInstance() : SearchQueryOptions { return new SearchQueryOptions(); }
}