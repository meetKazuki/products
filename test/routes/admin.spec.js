import chai from 'chai';
import chaiHttp from 'chai-http';
import { generateToken } from '../../src/helpers/auth';
import app from '../../src';
import { adminLogin, attendantLogin } from '../mocks/auth.mock';

const baseURI = '/api/v1';
const { expect } = chai;
let attendantToken;
let adminToken;

chai.use(chaiHttp);

describe('Admin Routes', () => {
  context('Retrieve all users in the system', () => {
    adminToken = generateToken(adminLogin);
    it('should retrieve all users in the system', (done) => {
      chai
        .request(app)
        .get(`${baseURI}/users`)
        .set('Authorization', adminToken)
        .end((err, res) => {
          const { status, message, data } = res.body;
          expect(res).to.have.status(200);
          expect(status).to.eql('success');
          expect(message).to.eql('Users retrieved!');
          expect(data).to.be.an('array');
          done(err);
        });
    });

    specify('error if token is not provided', (done) => {
      chai
        .request(app)
        .get(`${baseURI}/users`)
        .set('Authorization', '')
        .end((err, res) => {
          const { status, message } = res.body;
          expect(res).to.have.status(401);
          expect(status).to.eql('error');
          expect(message).to.eql('Unauthorized. Provide a token to continue');
          done(err);
        });
    });

    specify('error when an authorized user tries to access resource', (done) => {
      attendantToken = generateToken(attendantLogin);
      chai
        .request(app)
        .get(`${baseURI}/users`)
        .set('Authorization', attendantToken)
        .end((err, res) => {
          const { status, message } = res.body;
          expect(res).to.have.status(403);
          expect(status).to.eql('error');
          expect(message).to.eql('Access denied!');
          done(err);
        });
    });
  });

  context('Retrieve a user in the system', () => {
    adminToken = generateToken(adminLogin);
    it('should retrieve a user by his email address', (done) => {
      chai
        .request(app)
        .get(`${baseURI}/users/rheaphy9@123-reg.co.uk`)
        .set('Authorization', adminToken)
        .end((err, res) => {
          const { status, message, data } = res.body;
          expect(res).to.have.status(200);
          expect(status).to.eql('success');
          expect(message).to.eql('User retrieved!');
          expect(data).to.be.an('object');
          done(err);
        });
    });
  });
});
