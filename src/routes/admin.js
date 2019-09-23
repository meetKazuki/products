import { Router } from 'express';
import AdminController from '../controllers/admin';
import authentication from '../middleware/auth';
import permit from '../middleware/permission';

const { verifyToken } = authentication;

const admin = Router();

admin.get(
  '/users',
  verifyToken,
  permit('admin'),
  AdminController.getAllUsers
);

admin.get(
  '/users/:email',
  verifyToken,
  permit('admin'),
  AdminController.getAUser
);

export default admin;
