import bcrypt from 'bcryptjs';
import { config } from 'dotenv';
import DB from '../index';

config();
const salt = +process.env.SALT;

/**
 * @class User
 */
export default class User {
  /**
   * @param {object} user attributes
   */
  constructor({
    firstName, email, password, mobileNumber
  }) {
    User.incrementCount();
    this.id = User.count;
    this.firstName = firstName;
    this.email = email;
    this.password = bcrypt.hashSync(password, salt);
    this.mobileNumber = mobileNumber;
    this.role = 'attendant';
  }

  /**
   * @description increments attribute id
   * @returns {id} attribute Id
   * @memberof User
   */
  static incrementCount() {
    User.count += 1;
  }

  /**
   * @param {object} attributes
   * @returns {object} user resource
   * @memberof User
   */
  static create(attributes) {
    const user = new User(attributes);
    User.table.push(user);
    return user;
  }

  /**
   * @description - this method returns all objects
   * @returns {object} user
   * @memberof User
   */
  static findAll() {
    return User.table;
  }

  /**
   * @param {string} email
   * @returns {object} user
   * @memberof User
   */
  static findOne(email) {
    return User.table.find((user) => user.email === email);
  }

  /**
   * @description resets user DB
   * @returns {array} empty user array
   * @memberof User
   */
  static resetTable() {
    User.table = [];
    User.count = 0;
  }
}

User.table = DB.users;
User.count = User.table.length;
