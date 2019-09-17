import Response from '../helpers/response';
import Sale from '../database/models/sales';

const response = new Response();

/**
 * @class SaleController
 */
export default class SaleController {
  /**
   * Create a new product
   * Route: POST: /sales/new
   * @param {object} req object
   * @param {object} res object
   * @returns {object} product
   * @memberof SaleController
   */
  static createSale(req, res) {
    const { id: staffId } = req.user;
    const newSale = { staffId, ...req.body }
    const record = Sale.create(newSale);
    response.setSuccess(201, 'Sales added!', record);
    return response.send(res);
  }
  
  /**
   * Retrieve all sales
   * Route: GET: /sales
   * @param {object} req object
   * @param {object} res object
   * @returns {array} sales
   * @memberof SaleController
   */
  static getAllSales(req, res) {
    const sales = Sale.findAll();
    response.setSuccess(200, 'Sales retrieved!', sales);
    return response.send(res);
  }

  /**
   * Retrieve all sales
   * Route: GET: /sales/:saleId
   * @param {object} req object
   * @param {object} res object
   * @returns {object} product
   * @memberof SaleController
   */
  static getSingleSale(req, res) {
    const { saleId } = req.params;
    const isSale = Sale.findOne(parseInt(saleId, 10));
    if (!isSale) {
      response.setError(404, 'Sale not found!');
      return response.send(res);
    }

    response.setSuccess(200, 'Sale retrieved!', isSale);
    return response.send(res);
  }
}
