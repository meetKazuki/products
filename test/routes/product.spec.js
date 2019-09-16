import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src';
import { generateToken } from '../../src/helpers/auth';
import { adminLogin, attendantLogin, invalidToken } from '../mocks/auth.mock';
import { newProduct } from '../mocks/product.mock';

const baseURI = '/api/v1/products';
const { expect } = chai;
let adminToken;
let validToken;

chai.use(chaiHttp);

describe('Product Routes', () => {
  context('Create a new product', () => {
    it('should create a new product', (done) => {
      adminToken = generateToken(adminLogin);
      chai
        .request(app)
        .post(`${baseURI}/new`)
        .send(newProduct)
        .set('Authorization', adminToken)
        .end((err, res) => {
          const { status, message, data } = res.body;
          expect(res).to.have.status(201);
          expect(status).to.eql('success');
          expect(message).to.eql('Product added!');
          expect(data).to.be.an('object');
          expect(data).to.have.property('id');
          expect(data).to.have.property('name');
          expect(data).to.have.property('category');
          expect(data).to.have.property('price');
          expect(data).to.have.property('description');
          expect(data).to.have.property('imageUrl');
          done(err);
        });
    });

    specify('error if an unauthorized user tries to access resource', (done) => {
      validToken = generateToken(attendantLogin);
      chai
        .request(app)
        .post(`${baseURI}/new`)
        .set('Authorization', validToken)
        .end((err, res) => {
          const { status, message } = res.body;
          expect(res).to.have.status(403);
          expect(status).to.eql('error');
          expect(message).to.eql('Access denied!');
          done(err);
        });
    });
  });

  context('Retrieve all products in the system', () => {
    it('should retrieve all products in the system', (done) => {
      validToken = generateToken(attendantLogin);
      chai
        .request(app)
        .get(baseURI)
        .set('Authorization', validToken)
        .end((err, res) => {
          const { status, message, data } = res.body;
          expect(res).to.have.status(200);
          expect(status).to.eql('success');
          expect(message).to.eql('Products retrieved!');
          expect(data).to.be.an('array');
          done(err);
        });
    });

    specify('error if token is not provided', (done) => {
      chai
        .request(app)
        .get(baseURI)
        .set('Authorization', '')
        .end((err, res) => {
          const { status, message } = res.body;
          expect(res).to.have.status(401);
          expect(status).to.eql('error');
          expect(message).to.eql('Unauthorized. Provide a token to continue');
          done(err);
        });
    });

    specify('error if an invalid token is provided', (done) => {
      chai
        .request(app)
        .get(baseURI)
        .set('Authorization', invalidToken)
        .end((err, res) => {
          const { status, message } = res.body;
          expect(res).to.have.status(401);
          expect(status).to.eql('error');
          expect(message).to.eql('Unauthorized. Token is invalid or expired');
          done(err);
        });
    });
  });

  context('Retrieve product by ID', () => {
    it('should retrieve a product by its ID', (done) => {
      validToken = generateToken(attendantLogin);
      chai
        .request(app)
        .get(`${baseURI}/${3}`)
        .set('Authorization', validToken)
        .end((err, res) => {
          const { status, message, data } = res.body;
          expect(res).to.have.status(200);
          expect(status).to.eql('success');
          expect(message).to.eql('Product retrieved!');
          expect(data).to.be.an('object');
          done(err);
        });
    });

    specify('error if ID does not exist', (done) => {
      validToken = generateToken(attendantLogin);
      chai
        .request(app)
        .get(`${baseURI}/${30000}`)
        .set('Authorization', validToken)
        .end((err, res) => {
          const { status, message } = res.body;
          expect(res).to.have.status(404);
          expect(status).to.eql('error');
          expect(message).to.eql('Product not found!');
          done(err);
        });
    });

    specify('error if ID is invalid', (done) => {
      validToken = generateToken(attendantLogin);
      chai
        .request(app)
        .get(`${baseURI}/a`)
        .set('Authorization', validToken)
        .end((err, res) => {
          const { status, message } = res.body;
          expect(res).to.have.status(400);
          expect(status).to.eql('error');
          expect(message)
            .to.eql({ productId: 'Product ID must be a numeric value' });
          done(err);
        });
    });
  });
});
