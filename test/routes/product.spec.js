import chai from 'chai';
import chaiHttp from 'chai-http';
import { generateToken } from '../../src/helpers/auth';
import app from '../../src';
import { attendantLogin, invalidToken } from '../mocks/auth.mock';

const baseURI = '/api/v1/products';
const { expect } = chai;
let validToken;

chai.use(chaiHttp);

describe('Product Routes', () => {
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
});
