import { Injectable } from "@nestjs/common";
import { Newable } from "../../../../abstract/interface/Newable";
import { AbstractCrudServiceImpl } from '../../../../abstract/service/impl/abstract-crud-service-impl';
import { ProductDto } from '../../dto/product.dto';
import { ProductUpdateDto } from "../../dto/product.update.dto";
import { ProductNotFoundException } from '../../exception/product-not-found-exception';
import { Product } from '../../product';
import { ProductRepositoryImpl } from "../../repository/impl/product.repository.impl";
import { ProductService } from "../product.service.interface";

@Injectable()
export class ProductServiceImpl extends AbstractCrudServiceImpl<Product, ProductDto, ProductUpdateDto> implements ProductService {

  protected override readonly EntityDomain: Newable<any> = Product;
  protected override readonly EntityNotFoundException: Newable<ProductNotFoundException> = ProductNotFoundException;

  constructor(protected override repository: ProductRepositoryImpl) {
    super();
  }
}
