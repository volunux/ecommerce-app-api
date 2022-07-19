import { CrudService } from '../../../abstract/service/crud-service.interface';
import { Country } from '../country';
import { CountryDto } from '../dto/country.dto';
import { CountryUpdateDto } from '../dto/country.update.dto';

export interface CountryService extends CrudService<Country, CountryDto, CountryUpdateDto> {

}
