import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src';
import { adminLogin, attendantLogin, invalidToken } from '../mocks/auth.mock';
import { generateToken } from '../../src/helpers/auth';

const baseURI = '/api/v1/sales';
const { expect } = chai;
let adminToken;
let validToken;

chai.use(chaiHttp);

describe('Sales Routes', () => {
  context('Retrieve all sales records', () => {
    it('should retrieve all the sales records', (done) => {
      adminToken = generateToken(adminLogin);
      chai
        .request(app)
        .get(baseURI)
        .set('Authorization', adminToken)
        .end((err, res) => {
          const { status, message, data } = res.body;
          expect(res).to.have.status(200);
          expect(status).to.eql('success');
          expect(message).to.eql('Sales retrieved!');
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

    specify('error if an unauthorized user tries to access resource', (done) => {
      validToken = generateToken(attendantLogin);
      chai
        .request(app)
        .get(baseURI)
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

  context('Retrieve a single record', () => {
    it('should retrieve a product by its ID', (done) => {
      validToken = generateToken(adminLogin);
      chai
        .request(app)
        .get(`${baseURI}/${3}`)
        .set('Authorization', adminToken)
        .end((err, res) => {
          const { status, message, data } = res.body;
          expect(res).to.have.status(200);
          expect(status).to.eql('success');
          expect(message).to.eql('Sale retrieved!');
          expect(data).to.be.an('object');
          done(err);
        });
    });

    specify('error if ID does not exist', (done) => {
      adminToken = generateToken(adminLogin);
      chai
        .request(app)
        .get(`${baseURI}/${30000}`)
        .set('Authorization', adminToken)
        .end((err, res) => {
          const { status, message } = res.body;
          expect(res).to.have.status(404);
          expect(status).to.eql('error');
          expect(message).to.eql('Sale not found!');
          done(err);
        });
    });

    specify('error if ID is invalid', (done) => {
      adminToken = generateToken(adminLogin);
      chai
        .request(app)
        .get(`${baseURI}/a`)
        .set('Authorization', adminToken)
        .end((err, res) => {
          const { status, message } = res.body;
          expect(res).to.have.status(400);
          expect(status).to.eql('error');
          expect(message)
            .to.eql({ saleId: 'Sale ID must be a numeric value' });
          done(err);
        });
    });
  });
});
