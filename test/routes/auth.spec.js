import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src';
import { newUser, invalidUser } from '../mocks/auth.mock';

const baseURI = '/api/v1/auth';
const { expect } = chai;
chai.use(chaiHttp);

describe('Authentication Routes', () => {
  context('Signup Route', () => {
    it(`should post to ${baseURI}/signup`, (done) => {
      chai
        .request(app)
        .post(`${baseURI}/signup`)
        .send(newUser)
        .end((err, res) => {
          const { status, message, data } = res.body;
          expect(res).to.have.status(201);
          expect(status).to.eql('success');
          expect(message).to.eql('Signup successful!');
          expect(data).to.have.property('token');
          expect(data).to.have.property('id');
          expect(data).to.have.property('firstName');
          expect(data).to.have.property('email');
          expect(data).to.have.property('mobileNumber');
          expect(data).to.have.property('role');
          done(err);
        });
    });

    specify('error if user tries to signup with an existing email', (done) => {
      chai
        .request(app)
        .post(`${baseURI}/signup`)
        .send(newUser)
        .end((err, res) => {
          const { status, message } = res.body;
          expect(res).to.have.status(409);
          expect(status).to.eql('error');
          expect(message).to.eql('User already exist');
          done(err);
        });
    });

    specify('error if user tries to signup with invalid details', (done) => {
      chai
        .request(app)
        .post(`${baseURI}/signup`)
        .send(invalidUser)
        .end((err, res) => {
          const { status } = res.body;
          expect(res).to.have.status(400);
          expect(status).to.eql('error');
          done(err);
        });
    });
  });

  context('Signin Route', () => {
    it(`should post to ${baseURI}/signin`, (done) => {
      chai
        .request(app)
        .post(`${baseURI}/signin`)
        .send({ email: newUser.email, password: newUser.password })
        .end((err, res) => {
          const { status, message, data } = res.body;
          expect(res).to.have.status(200);
          expect(status).to.eql('success');
          expect(message).to.eql('Signin successful!');
          expect(data).to.have.property('token');
          done(err);
        });
    });

    specify('error if wrong email address is entered', (done) => {
      chai
        .request(app)
        .post(`${baseURI}/signin`)
        .send({ email: 'meetdesmond.edem@gmail.com', password: newUser.password })
        .end((err, res) => {
          const { status, message } = res.body;
          expect(res).to.have.status(401);
          expect(status).to.eql('error');
          expect(message).to.eql('Email/password is incorrect');
          done(err);
        });
    });

    specify('error if wrong password is entered', (done) => {
      chai
        .request(app)
        .post(`${baseURI}/signin`)
        .send({ email: newUser.email, password: '123445678' })
        .end((err, res) => {
          const { status, message } = res.body;
          expect(res).to.have.status(401);
          expect(status).to.eql('error');
          expect(message).to.eql('Email/password is incorrect');
          done(err);
        });
    });
  });
});
