import { use, request, expect } from "chai";
import chaiHttp from "chai-http";

import app from "../app";

process.env.NODE_ENV = 'test';

use(chaiHttp);

describe('Testing User Endpoint', () => {
  it('Should get all Users', (done) => {
    request(app)
      .get('/api/v1/users')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      })
  });
  
  it('Should display an error', (done) => {
    request(app)
      .get('/api/v1/user')
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      })
  });
  
  it('Should not add a user', (done) => {
    let user1 = {
      name: 'Bob Doe',
      email: 'bob@example.com'
    };
    request(app)
      .post('/api/v1/users/add')
      .send(user1)
      .end((err, res) => {
            expect(res).to.have.status(400);
            expect(res).to.be.a('object');
        done();
      });
  });
});
