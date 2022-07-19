export class ProductCategory {

  private productId: number;
  private categoryId: number;

  public getProductId(): number {
    return this.productId;
  }

  public setProductId(productId: number): void {
    this.productId = productId;
  }

  public getCategoryId(): number {
    return this.categoryId;
  }

  public setCategoryId(categoryId: number): void {
    this.categoryId = categoryId;
  } 
}