import { randomBytes, pbkdf2Sync } from 'crypto';
import { User } from '../user';
import { UserStatus } from '../../user.status/user.status';
import { Role } from '../../role/role';

export class UserHelper {

  /**
   * It sets the object whose type is User the hash and salt property values using the setter properties
   * @param {User} user - Takes an instance object of type User or an object whose prototype chain includes class User
   * @returns {void} No value is returned
   *  
   */
  public static setPassword(user: User): void {
    let salt: string = randomBytes(16).toString('base64');
    let hash: string = pbkdf2Sync(user.getPassword(), salt, 1000, 64, 'sha512').toString('hex');
    user.setPasswordSalt(salt);
    user.setPasswordHash(hash);
  }

  /**
   * @param {any[]} entryValue - Takes an array of objects, filter them and returns an array of strings whose value is made up of the key 
   * that was passed in the original argument.  
   * @param {string} key - The value which is used to filter the array and whose values is returned. 
   * @returns {string[]} - It returns an array of strings
   */
  public static jsonArrayFlattener(entryValue: any[], key: string): string[] {
    if (!(entryValue instanceof Array)) return [];
    else { return entryValue.map((item) => { return item[key]; }); }
  }

  /**
 * @param {any[]} entryValue - Takes an array of objects, filter them and returns an array of strings whose value is made up of the key 
 * that was passed in the original argument.  
 * @param {string} key - The value which is used to filter the array and whose values is returned. 
 * @returns {number[]} - It returns an array of strings
 */
  public static jsonArrayFlattenerInt(entryValue: any[], key: string): number[] {
    if (!(entryValue instanceof Array)) return [];
    else { return entryValue.map((item) => { return +(item[key]); }); }
  }

  public static validPassword(password: any, user: User): boolean {
    let hash: string = pbkdf2Sync(password, user.getPasswordSalt(), 1000, 64, 'sha512').toString('hex');
    return user.getPasswordHash() === hash;
  }

  public static getUserRoles(roles: Role[]): string[] {
    let transformedRoles: string[] = roles.map(function (role: Role): string { return role.getTitle(); });
    return transformedRoles;
  }

  public static getUserStatus(status: UserStatus): string {
    if (status === null) return "";
    return status.getTitle();
  }

}