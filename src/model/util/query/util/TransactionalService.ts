
export interface TransactionalService {

  get<S>(context : S) : Promise<S>;
}