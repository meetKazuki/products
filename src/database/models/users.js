import DB from '../index';

/**
 * @class User
 */
export default class User {
  /**
   * 
   */
  all() {
    return User.table;
  }
}

User.table = DB.user;
User.count = User.table.length;
