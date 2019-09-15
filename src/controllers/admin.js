import Response from '../helpers/response';
import User from '../database/models/users';

const response = new Response();

/**
 * @class AdminController
 */
export default class AdminController {
  /**
   * Retrieve all users
   * Route: GET: /users
   * @param {object} req object
   * @param {object} res object
   * @returns {array} users
   * @memberof AdminController
   */
  static getAllUsers(req, res) {
    const users = User.findAll();
    response.setSuccess(200, 'Users retrieved!', users);
    return response.send(res);
  }
}
