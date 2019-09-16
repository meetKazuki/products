import { Router } from 'express';
import authentication from '../middleware/auth';
import permit from '../middleware/permission';
import ProductController from '../controllers/product';
import schemas from '../validation/product';
import validator from '../middleware/validator';

const { verifyToken } = authentication;
const { createProductSchema, getProductSchema } = schemas;

const product = Router();

product.post(
  '/new',
  verifyToken,
  permit('admin'),
  validator(createProductSchema),
  ProductController.createProduct
);

product.get(
  '/',
  verifyToken,
  permit('attendant', 'admin'),
  ProductController.getAllProducts
);

product.get(
  '/:productId',
  verifyToken,
  permit('attendant', 'admin'),
  validator(getProductSchema),
  ProductController.getSingleProduct
);

export default product;
