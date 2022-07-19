import { Category } from '../Category';
import { CategoryDto } from '../dto/category.dto';
import { CategoryUpdateDto } from '../dto/category.update.dto';
import { CrudService } from '../../../abstract/service/crud-service.interface';

export interface CategoryService extends CrudService<Category, CategoryDto, CategoryUpdateDto> {

}
