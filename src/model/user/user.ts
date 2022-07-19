import { Exclude } from 'class-transformer';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, RelationId } from 'typeorm';

import { Role } from '../role/role';
import { UserStatus } from '../user.status/user.status';
import { AbstractBaseEntity } from '../abstract/AbstractBaseEntity';
import { Country } from '../country/country';

@Entity("users")
export class User extends AbstractBaseEntity {

  constructor(data?: any) {
    super(data);

    if (data) {
      this.firstName = data.firstName ? data.firstName : undefined;
      this.middleName = data.middleName ? data.middleName : undefined;
      this.lastName = data.lastName ? data.lastName : undefined;
      this.emailAddress = data.emailAddress ? data.emailAddress : undefined;
      this.mobilePhone = data.mobilePhone ? data.mobilePhone : undefined;
      this.password = data.password ? data.password : "";
      this.passwordHash = data.passwordHash ? data.passwordHash : "";
      this.passwordSalt = data.passwordSalt ? data.passwordSalt : "";
      this.userFullName = data.userFullName ? data.userFullName : undefined;
      this.roles = data.roles ? (typeof data.roles == "string" ? new Array(data.roles) : data.roles) : [];
      this.userStatus = data.userStatus ? data.userStatus : undefined;
      this.userStatusId = data.userStatusId ? data.userStatusId : undefined;
      this.userRoles = data.userRoles ? data.userRoles : [];
      this.resetPasswordToken = data.resetPasswordToken ? data.resetPasswordToken : undefined;
      this.resetPasswordExpires = data.resetPasswordExpires ? data.resetPasswordExpires : undefined;
      this.country = data.country ? data.country : undefined;
      this.countryId = data.countryId ? data.countryId : undefined;
    }

  }

  @Column({
    'name': 'first_name',
    'type': 'varchar',
    'length': 20
  })
  private firstName: string;

  @Column({
    'name': 'middle_name',
    'type': 'varchar',
    'length': 20
  })
  private middleName: string;
  
  @Column({
    'name': 'last_name',
    'type': 'varchar',
    'length': 20
  })
  private lastName: string;

  @Column({
    'name': 'mobile_phone',
    'type': 'varchar',
    'length': 15
  })
  private mobilePhone: string;
  
  @Column({
    'name': 'email_address',
    'type': 'varchar',
    'length': 50
  })
  private emailAddress: string;

  @Column({
    'name': 'hash',
    'type': 'varchar',
    'length': 500
  })
  @Exclude()
  private passwordHash: string;

  @Column({
    'name': 'salt',
    'type': 'varchar',
    'length': 500
  })
  @Exclude()
  private passwordSalt: string;

  private password: string;

  @Column({
    'nullable': true,
    'name': 'reset_password_token',
    'unique': true
  })
  private resetPasswordToken: string;

  @Column({
    'nullable': true,
    'name': 'reset_password_expires'
  })
  private resetPasswordExpires: string;

  @ManyToOne(() => UserStatus, {
    'nullable': true,
    'eager': true,
    'onDelete': 'SET NULL'
  })
  @JoinColumn({
    'name': 'status_id'
  })
  private userStatus: UserStatus;

  @Column({
    'nullable': true,
    'name': 'status_id'
  })
  @RelationId((self: User) => self.userStatus)
  private userStatusId: number;

  @ManyToOne(() => Country, {
    'nullable': true,
    'eager': true,
    'onDelete': 'SET NULL'
  })
  @JoinColumn({
    'name': 'country_id'
  })
  private country: Country;

  @Column({
    'nullable': true,
    'name': 'country_id'
  })
  @RelationId((self: User) => self.country)
  private countryId: number;

  @ManyToMany(() => Role, {
    'eager': true
  })
  @JoinTable({
    'name': 'user_role',
    'joinColumn': {
      'name': 'user_id',
      'referencedColumnName': 'id'
    },
    'inverseJoinColumn': {
      'name': 'role_id',
      'referencedColumnName': 'id'
    }
  })
  private userRoles: Role[];

  private userFullName?: string;
  private userEmailAddress?: string;

  private roles: number[];

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

  public getPasswordHash(): string {
    return this.passwordHash;
  }

  public setPasswordHash(passwordHash: string): void {
    this.passwordHash = passwordHash;
  }

  public getPasswordSalt(): string {
    return this.passwordSalt;
  }

  public setPasswordSalt(passwordSalt: string): void {
    this.passwordSalt = passwordSalt;
  }

  public getPassword(): string {
    return this.password;
  }

  public setPassword(password: string): void {
    this.password = password;
  }

  public getUserStatus(): UserStatus {
    return this.userStatus;
  }

  public setUserStatus(userStatus: UserStatus): void {
    this.userStatus = userStatus;
  }

  public getUserStatusId(): number {
    return this.userStatusId;
  }

  public setUserStatusId(userStatusId: number): void {
    this.userStatusId = userStatusId;
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

  public getUserRoles(): Role[] {
    return this.userRoles;
  }

  public setUserRoles(userRoles: Role[]): void {
    this.userRoles = userRoles;
  }

  public getUserFullName(): string {
    return this.userFullName;
  }

  public setUserFullName(userFullName: string): void {
    this.userFullName = userFullName;
  }

  public getRoles(): number[] {
    return this.roles;
  }

  public setRoles(roles: number[]): void {
    this.roles = roles;
  }

  public getResetPasswordToken(): string {
    return this.resetPasswordToken;
  }

  public setResetPasswordToken(resetPasswordToken: string): void {
    this.resetPasswordToken = resetPasswordToken;
  }

  public getResetPasswordExpires(): string {
    return this.resetPasswordExpires;
  }

  public setResetPasswordExpires(resetPasswordExpires: string): void {
    this.resetPasswordExpires = resetPasswordExpires;
  }

}
