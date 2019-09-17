import { Router } from 'express';
import authentication from '../middleware/auth';
import permit from '../middleware/permission';
import SaleController from '../controllers/sale';
import schemas from '../validation/sale';
import validator from '../middleware/validator';

const { verifyToken } = authentication;
const { createSalesSchema, getSalesSchema } = schemas;

const sale = Router();

sale.post(
  '/new',
  verifyToken,
  permit('attendant'),
  validator(createSalesSchema),
  SaleController.createSale
);

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
  validator(getSalesSchema),
  SaleController.getSingleSale
);

export default sale;
