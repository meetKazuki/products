import { config } from 'dotenv';
import Response from '../helpers/response';
import User from '../database/models/users';
import { generateToken, verifyPassword } from '../helpers/auth';

config();
const response = new Response();

/**
 * @class AuthController
 */
export default class AuthController {
  /**
   * Signup user
   * Route: POST: /auth/signup
   * @param {object} req object
   * @param {object} res object
   * @returns {object} user object
   * @memberof AuthController
   */
  static signup(req, res) {
    const newUser = User.create(req.body);
    const token = generateToken({ newUser });
    const {
      id, firstName, email, mobileNumber, role
    } = newUser;

    response.setSuccess(
      201,
      'Signup successful!',
      {
        token, id, firstName, email, mobileNumber, role
      }
    );
    return response.send(res);
  }

  /**
   * Signin user
   * Route: POST: /auth/signin
   * @param {object} req object
   * @param {object} res object
   * @returns {object} user object
   * @memberof AuthController
   */
  static signin(req, res) {
    const { email, password } = req.body;
    const user = User.findOne(email);
    if (!user) {
      response.setError(401, 'Email/password is incorrect');
      return response.send(res);
    }
    const isPassword = verifyPassword(password, user.password);
    if (!isPassword) {
      response.setError(401, 'Email/password is incorrect');
      return response.send(res);
    }

    const { id, role } = user;
    const token = generateToken({ id, role });
    response.setSuccess(200, 'Signin successful!', { token });
    return response.send(res);
  }
}
