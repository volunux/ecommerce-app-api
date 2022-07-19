import { CrudRepository } from '../../../abstract/repository/crud-repository.interface';
import { Category } from '../category';

export interface CategoryRepository extends CrudRepository<Category> {
}
