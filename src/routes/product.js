import { Router } from 'express';
import authentication from '../middleware/auth';
import permit from '../middleware/permission';
import ProductController from '../controllers/product';

const { verifyToken } = authentication;

const product = Router();

product.get(
  '/',
  verifyToken,
  permit('attendant', 'admin'),
  ProductController.getAllProducts
);

export default product;
