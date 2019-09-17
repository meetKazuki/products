import DB from '../index';

/**
 * @class Product
 */
export default class Sale {
  /**
   * @param {object} product attributes
   */
  constructor({
    productId, staffId
  }) {
    Sale.incrementCount();
    this.id = Sale.count;
    this.productId = productId;
    this.staffId = staffId;
  }

  /**
   * @description increments attribute id
   * @returns {id} attribute Id
   * @memberof Sale
   */
  static incrementCount() {
    Sale.count += 1;
  }

  /**
   * @param {object} attributes
   * @returns {object} user resource
   * @memberof Sale
   */
  static create(attributes) {
    const product = new Sale(attributes);
    Sale.table.push(product);
    return product;
  }

  /**
   * @description - this method returns all objects
   * @returns {object} products
   * @memberof Sale
   */
  static findAll() {
    return Sale.table;
  }

  /**
   * @param {number} id
   * @returns {object} product
   * @memberof Sale
   */
  static findOne(id) {
    return Sale.table.find((product) => product.id === id);
  }

  /**
   * @description resets product DB
   * @returns {array} empty product array
   * @memberof Sale
   */
  static resetTable() {
    Sale.table = [];
    Sale.count = 0;
  }
}

Sale.table = DB.sales;
Sale.count = Sale.table.length;
