import { use, request, expect, should } from "chai";
import chaiHttp from "chai-http";

import app from "../app";

use(chaiHttp);

describe('Testing User Endpoint', () => {
  it('Should get all Users', (done) => {
    request(app)
      .get('/api/users')
      .end((err, res) => {
        expect(res).to.have.status(200);
        // res.should.have.status(200);
        done();
      })
  });
});