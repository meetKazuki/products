import { check } from 'express-validator';

export default {
  createSalesSchema: [
    check('productId')
      .exists()
      .withMessage('Product ID must be provided')
  ],
  
  getSalesSchema: [
    check('saleId')
      .exists()
      .withMessage('Sale ID is required')
      .isNumeric()
      .withMessage('Sale ID must be a numeric value')
  ]
};
