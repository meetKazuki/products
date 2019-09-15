import { config } from 'dotenv';
import jwt from 'jsonwebtoken';
import Response from '../helpers/response';
import User from '../database/models/users';

config();
const response = new Response();
const { TOKEN_SECRET } = process.env;

export default {
  checkExistingUser: (req, res, next) => {
    const { email } = req.body;
    const theUser = User.findOne(email);
    if (theUser) {
      response.setError(409, 'User already exist');
      return response.send(res);
    }

    return next();
  },
};
