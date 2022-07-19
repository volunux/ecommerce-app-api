import { CrudRepository } from "../../../abstract/repository/crud-repository.interface";
import { Product } from "../product";

export interface ProductRepository extends CrudRepository<Product> {

}
