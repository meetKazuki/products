import DB from '../index';

/**
 * @class Product
 */
export default class Product {
  /**
   * @param {object} product attributes
   */
  constructor({
    name, category, price, quantity, description
  }) {
    Product.incrementCount();
    this.id = Product.count;
    this.name = name;
    this.category = category;
    this.price = price;
    this.quantity = quantity;
    this.description = description || 'This is a test product';
    this.imageUrl = 'image.png';
  }

  /**
   * @description increments attribute id
   * @returns {id} attribute Id
   * @memberof Product
   */
  static incrementCount() {
    Product.count += 1;
  }

  /**
   * @param {object} attributes
   * @returns {object} user resource
   * @memberof Product
   */
  static create(attributes) {
    const product = new Product(attributes);
    Product.table.push(product);
    return product;
  }

  /**
   * @description - this method returns all objects
   * @returns {object} products
   * @memberof Product
   */
  static findAll() {
    return Product.table;
  }

  /**
   * @param {number} id
   * @returns {object} product
   * @memberof Product
   */
  static findOne(id) {
    return Product.table.find((product) => product.id === id);
  }

  /**
   * @description resets product DB
   * @returns {array} empty product array
   * @memberof Product
   */
  static resetTable() {
    Product.table = [];
    Product.count = 0;
  }
}

Product.table = DB.products;
Product.count = Product.table.length;
