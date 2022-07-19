import { Injectable } from "@nestjs/common";
import { Newable } from "../../../../abstract/interface/Newable";
import { AbstractCrudServiceImpl } from '../../../../abstract/service/impl/abstract-crud-service-impl';
import { Category } from '../../category';
import { CategoryDto } from '../../dto/category.dto';
import { CategoryUpdateDto } from "../../dto/category.update.dto";
import { CategoryNotFoundException } from '../../exception/category-not-found-exception';
import { CategoryRepositoryImpl } from '../../repository/impl/category-repository-impl';
import { CategoryService } from "../category-service.interface";

@Injectable()
export class CategoryServiceImpl extends AbstractCrudServiceImpl<Category, CategoryDto, CategoryUpdateDto> implements CategoryService {

  protected override readonly EntityDomain: Newable<any> = Category;
  protected override readonly EntityNotFoundException: Newable<CategoryNotFoundException> = CategoryNotFoundException;

  constructor(protected override repository: CategoryRepositoryImpl) {
    super();
  }
}
