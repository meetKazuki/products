import { check } from 'express-validator';
// import capitalize from '../helpers/capitalize';

export default {
  createProductSchema: [
    check('name')
      .exists().withMessage('Product name is required')
      .trim()
      .isAlpha()
      .withMessage('Product name should only contain alphabets'),

    check('category')
      .exists()
      .withMessage('Product category is required')
      .isAlpha()
      .withMessage('Product category should only contain alphabets'),

    check('price')
      .exists()
      .withMessage('Product must have a price')
      .isNumeric()
      .withMessage('Product price must be a numeric value'),

    check('quantity')
      .optional()
      .isNumeric()
      .withMessage('Product quantity must be a number'),
  ],

  getProductSchema: [
    check('productId')
      .exists()
      .withMessage('Product ID is required')
      .isNumeric()
      .withMessage('Product ID must be a numeric value')
  ]
};
