import { check } from 'express-validator';

export default {
  getSaleSchema: [
    check('saleId')
      .exists()
      .withMessage('Sale ID is required')
      .isNumeric()
      .withMessage('Sale ID must be a numeric value')
  ]
};
