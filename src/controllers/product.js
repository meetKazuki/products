import Product from '../database/models/products';
import Response from '../helpers/response';

const response = new Response();

/**
 * @class ProductController
 */
export default class ProductController {
  /**
   * Retrieve all products
   * Route: GET: /products
   * @param {object} req object
   * @param {object} res object
   * @returns {array} products
   * @memberof ProductController
   */
  static getAllProducts(req, res) {
    const products = Product.findAll();
    response.setSuccess(200, 'Products retrieved!', products);
    return response.send(res);
  }
}
