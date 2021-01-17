import { use, request, expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../app';

use(chaiHttp);

describe('Testing App Endpoint', () => {
  it('Should welcome a user to the app', () => {
    request(app)
      .get('/api')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body.message).to.equals('Welcome on CodeGig');
      })
  });
});
