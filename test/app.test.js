import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index';

const { expect } = chai;
chai.use(chaiHttp);

describe('Home routes', () => {
  context('App is setup correctly', () => {
    it('should confirm app is a function', () => {
      expect(app).to.be.a('function');
    });
  });

  context('Routes are properly setup', () => {
    it('should return success on index route', (done) => {
      chai
        .request(app)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.status).to.eql('success');
          expect(res.body).to.have.property('message');
          done(err);
        });
    });

    specify('error if a wrong endpoint is requested', () => {
      chai
        .request(app)
        .get('/404')
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body.status).to.eql('error');
          expect(res.body).to.have.property('error');
        });
    });
  });
});
