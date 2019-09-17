import { Router } from 'express';
import authentication from '../middleware/auth';
import permit from '../middleware/permission';
import SaleController from '../controllers/sale';
import schemas from '../validation/sale';
import validator from '../middleware/validator';

const { verifyToken } = authentication;
const { getSaleSchema } = schemas;

const sale = Router();

sale.get(
  '/',
  verifyToken,
  permit('admin'),
  SaleController.getAllSales
);

sale.get(
  '/:saleId',
  verifyToken,
  permit('admin'),
  validator(getSaleSchema),
  SaleController.getSingleSale
);

export default sale;
