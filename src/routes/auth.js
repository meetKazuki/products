import { Router } from 'express';
import authController from '../controllers/auth';
import authentication from '../middleware/auth';
import schemas from '../validation/auth';
import validator from '../middleware/validator';

const { signupSchema, signinSchema } = schemas;
const { checkExistingUser } = authentication;
const { signup, signin } = authController;

const router = Router();

router.post(
  '/signup',
  validator(signupSchema),
  checkExistingUser,
  signup,
);

router.post(
  '/signin',
  validator(signinSchema),
  signin
);

export default router;
