import { Entity, Column, ManyToOne, JoinColumn, RelationId } from 'typeorm';
import { AbstractBaseEntity } from '../abstract/AbstractBaseEntity';
import { Product } from '../product/product';

@Entity("product_review")
export class ProductReview extends AbstractBaseEntity {

  @ManyToOne(() => Product, {
    'nullable': true,
    'eager': false,
    'onDelete': 'SET NULL'
  })
  @JoinColumn({
    'name': 'product_id'
  })
  private product: Product;

  @Column({
    'nullable': true,
    'name': 'product_id'
  })
  @RelationId((self: ProductReview) => self.product)
  private productId: number;
  
  @Column({
    'type': 'varchar',
    'length': 150,
  })
  private title: string;
  
  @Column({
    'type': 'int',
    'default': 0
  })
  private rating: number;
  
  @Column({
    'type': 'boolean',
    'default': false
  })
  private published: boolean;

  @Column({
    'type': 'text'
  })
  private content: string;

  public getProductId(): number {
    return this.productId;
  }

  public setProductId(productId: number): void {
    this.productId = productId;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getRating(): number {
    return this.rating;
  }

  public setRating(rating: number): void {
    this.rating = rating;
  }

  public isPublished(): boolean {
    return this.published;
  }

  public setPublished(published: boolean): void {
    this.published = published;
  }

  public getContent(): string {
    return this.content;
  }

  public setContent(content: string): void {
    this.content = content;
  }
}