import Product from '../database/models/products';
import Response from '../helpers/response';

const response = new Response();

/**
 * @class ProductController
 */
export default class ProductController {
  /**
   * Create a new product
   * Route: POST: /product
   * @param {object} req object
   * @param {object} res object
   * @returns {object} product
   * @memberof ProductController
   */
  static createProduct(req, res) {
    const newProduct = Product.create(req.body);
    response.setSuccess(201, 'Product added!', newProduct);
    return response.send(res);
  }

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

  /**
   * Retrieve all products
   * Route: GET: /products/:productId
   * @param {object} req object
   * @param {object} res object
   * @returns {object} product
   * @memberof ProductController
   */
  static getSingleProduct(req, res) {
    const { productId } = req.params;
    const isProduct = Product.findOne(parseInt(productId, 10));
    if (!isProduct) {
      response.setError(404, 'Product not found!');
      return response.send(res);
    }

    response.setSuccess(200, 'Product retrieved!', isProduct);
    return response.send(res);
  }
}
