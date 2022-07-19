import { Expose, Type } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { AbstractBaseEntity } from '../abstract/AbstractBaseEntity';

@Entity('products')
export class Product extends AbstractBaseEntity {

  constructor(data?: any) {
    super(data);
    if (data) {
      this.title = data.title;
      this.price = data.price;
      this.description = data.description;
      this.quantity = data.quantity;
      this.shop = data.shop;
    }

  }

  @Expose()
  @Column({
    'length': 150,
    'nullable': false
  })
  public title: string;

  @Expose()
  @Type(() => Number)
  @Column({
    'type': 'float',
    'nullable': false
  })
  private price: number;

  @Column({
    'type': 'varchar',
    'nullable': false,
    'length': 1000
  })
  private description: string;

  @Column({
    'type': 'int',
    'nullable': false,
  })
  private quantity: number;

  @Column({
    'type': 'varchar',
    'length': 150,
    'nullable': false
  })
  private shop: string;

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getPrice(): number {
    return this.price;
  }

  public setPrice(price: number): void {
    this.price = price;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public getQuantity(): number {
    return this.quantity;
  }

  public setQuantity(quantity: number): void {
    this.quantity = quantity;
  }

  private getShop(): string {
    return this.shop;
  }

  public setShop(shop: string): void {
    this.shop = shop;
  }

}
