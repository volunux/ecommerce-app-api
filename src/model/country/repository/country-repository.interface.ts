import { CrudRepository } from 'src/model/abstract/repository/base/Repository';
import { Country } from "../country";

export interface CountryRepository extends CrudRepository<Country> {

}
