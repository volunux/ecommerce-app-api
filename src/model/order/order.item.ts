import { Product } from '../product/product';
import { Order } from './order';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, RelationId } from 'typeorm';

@Entity("order_item")
export class OrderItem {

  @PrimaryGeneratedColumn()
  private id: number;

  private sku: string;

  @Column({
    'type': 'int',
    'nullable': false
  })
  private amount: number;
  
  @Column({
    'type': 'int',
    'nullable': false
  })
  private quantity: number;
  
  @Column({
    'type': 'int',
    'name': 'unit_price',
    'nullable': false
  })
  private unitPrice: number;
  
  @Column({
    'type': 'varchar',
    'length': 150,
    'nullable': false
  })
  private title: string;

  @ManyToOne(() => Product, {
    'nullable': true,
    'onDelete': 'SET NULL',
    'eager': false
  })
  @JoinColumn({
    'name': 'product_id'
  })
  public product: Product;

  @Column({
    'nullable': true,
    'name': 'product_id'
  })
  @RelationId((self: OrderItem) => self.product)
  public productId: number;

  @ManyToOne(() => Order, {
    'nullable': true,
    'onDelete': 'SET NULL',
    'eager': false
  })
  @JoinColumn({
    'name': 'order_id'
  })
  public order: Order;

  @Column({
    'nullable': true,
    'name': 'order_id'
  })
  @RelationId((self: OrderItem) => self.order)
  public orderId: number;

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getSku(): string {
    return this.sku;
  }

  public setSku(sku: string): void {
    this.sku = sku;
  }

  public getAmount(): number {
    return this.amount;
  }

  public setAmount(amount: number): void {
    this.amount = amount;
  }

  public getQuantity(): number {
    return this.quantity;
  }

  public setQuantity(quantity: number): void {
    this.quantity = quantity;
  }

  public getUnitPrice(): number {
    return this.unitPrice;
  }

  public setUnitPrice(unitPrice: number): void {
    this.unitPrice = unitPrice;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getProduct(): Product {
    return this.product;
  }

  public setProduct(product: Product): void {
    this.product = product;
  }

  public getProductId(): number {
    return this.productId;
  }

  public setProductId(productId: number): void {
    this.productId = productId;
  }
  

  public getOrder(): Order {
    return this.order;
  }

  public setOrder(order: Order): void {
    this.order = order;
  }

  public getOrderId(): number {
    return this.orderId;
  }

  public setOrderId(orderId: number): void {
    this.orderId = orderId;
  }
}