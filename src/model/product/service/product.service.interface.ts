import { Product } from '../product';
import { ProductDto } from '../dto/product.dto';
import { ProductUpdateDto } from '../dto/product.update.dto';
import { CrudService } from '../../../abstract/service/crud-service.interface';

export interface ProductService extends CrudService<Product, ProductDto, ProductUpdateDto> {
}
