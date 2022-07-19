import { Country } from '../country/country';
import { OrderStatus } from '../order.status/order-status';
import { AbstractBaseEntity } from '../abstract/AbstractBaseEntity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, RelationId } from 'typeorm';
import { User } from '../user/user';
import { OrderItem } from './order.item';

@Entity("orders")
export class Order extends AbstractBaseEntity {

  constructor(data?: any) {
    super(data);
  }

  @ManyToOne(() => User, {
    'nullable': true,
    'onDelete': 'SET NULL',
    'eager': false
  })
  @JoinColumn({
    'name': 'user_id'
  })
  private user: User;

  @Column({
    'nullable': true,
    'name': 'user_id'
  })
  @RelationId((self: Order) => self.user)
  private userId: number;

  @ManyToOne(() => OrderStatus, {
    'nullable': true,
    'onDelete': 'SET NULL',
    'eager': false
  })
  @JoinColumn({
    'name': 'status_id'
  })
  private orderStatus: OrderStatus;

  @Column({
    'nullable': true,
    'name': 'status_id'
  })
  @RelationId((self: Order) => self.orderStatus)
  private orderStatusId: number;

  @Column({
    'type': 'int' 
  })
  private amount: number;

  private shipping: number;

  @Column({
    'type': 'varchar',
    'name': 'first_name',
    'length': 20
  })
  private firstName: string;
  
  @Column({
    'type': 'varchar',
    'name': 'middle_name',
    'length': 20
  })
  private middleName: string;
  
  @Column({
    'type': 'varchar',
    'name': 'last_name',
    'length': 20
  })
  private lastName: string;
  
  @Column({
    'type': 'varchar',
    'name': 'mobile_phone',
    'length': 15
  })
  private mobilePhone: string;
  
  @Column({
    'type': 'varchar',
    'name': 'email_address',
    'length': 50
  })
  private emailAddress: string;
 
  @Column({
    'type': 'varchar',
    'name': 'contact_address',
    'length': 300
  })
  private contactAddress: string;
  
  @Column({
    'type': 'varchar',
    'length': 25
  })
  private city: string;
  
  @Column({
    'type': 'varchar',
    'name': 'state',
    'length': 25
  })
  private province: string;

  @Column({
    'type': 'varchar',
    'length': 25
  })
  private zip: string;

  @ManyToOne(() => Country, {
    'nullable': true,
    'onDelete': 'SET NULL',
    'eager': false
  })
  @JoinColumn({
    'name': 'country_id'
  })
  private country: Country;

  @Column({
    'nullable': true,
    'name': 'country_id'
  })
  @RelationId((self: Order) => self.country)
  private countryId: number;

  @OneToMany(() => OrderItem, item => item.order, {
    'cascade': true,
    'eager': false
  })
  public orderItems: OrderItem[];

  private content: string;

  public getUser(): User {
    return this.user;
  }

  public setUser(user: User): void {
    this.user = user;
  }

  public getUserId(): number {
    return this.userId;
  }

  public setUserId(userId: number): void {
    this.userId = userId;
  }

  public getOrderStatus(): OrderStatus {
    return this.orderStatus;
  }

  public setOrderStatus(orderStatus: OrderStatus): void {
    this.orderStatus = orderStatus;
  }

  public getOrderStatusId(): number {
    return this.orderStatusId;
  }

  public setOrderStatusId(orderStatusId: number): void {
    this.orderStatusId = orderStatusId;
  }

  public getAmount(): number {
    return this.amount;
  }

  public setTotal(amount: number): void {
    this.amount = amount;
  }

  public getShipping(): number {
    return this.shipping;
  }

  public setShipping(shipping: number): void {
    this.shipping = shipping;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public setFirstName(firstName: string): void {
    this.firstName = firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  public getMiddleName(): string {
    return this.middleName;
  }

  public setMiddleName(middleName: string): void {
    this.middleName = middleName;
  }

  public getMobilePhone(): string {
    return this.mobilePhone;
  }

  public setMobilePhone(mobilePhone: string): void {
    this.mobilePhone = mobilePhone;
  }

  public getEmailAddress(): string {
    return this.emailAddress;
  }

  public setEmailAddress(emailAddress: string): void {
    this.emailAddress = emailAddress;
  }

  public getContactAddress(): string {
    return this.contactAddress;
  }

  public setContactAddress(contactAddress: string): void {
    this.contactAddress = contactAddress;
  }

  public getCity(): string {
    return this.city;
  }

  public setCity(city: string): void {
    this.city = city;
  }

  public getProvince(): string {
    return this.province;
  }

  public setProvince(province: string): void {
    this.province = province;
  }

  public getZip(): string {
    return this.zip;
  }

  public setZip(zip: string): void {
    this.zip = zip;
  }

  public getCountry(): Country {
    return this.country;
  }

  public setCountry(country: Country): void {
    this.country = country;
  }

  public getCountryId(): number {
    return this.countryId;
  }

  public setCountryId(countryId: number): void {
    this.countryId = countryId;
  }

  public getContent(): string {
    return this.content;
  }

  public setContent(content: string): void {
    this.content = content;
  }

  public getOrderItems(): OrderItem[] {
    return this.orderItems;
  }

  public setOrderItems(orderItems: OrderItem[]): void {
    this.orderItems = orderItems;
  }

}