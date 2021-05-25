//During the test the env variable is set to test
process.env.NODE_ENV = 'test';


//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('Books', () => {
  // beforeEach((done) => { //Before each test we empty the database
  //   Book.remove({}, (err) => {
  //     done();
  //   });
  // });
  /*
    * Test the /GET route
    */
  describe('/GET book', () => {
    it('it should GET all the books', (done) => {
      chai.request('https://fcc-strapi.herokuapp.com')
        .get('/members')
        .end((err, res) => {
          res.should.have.status(200);
          //res.body.should.be.a('array');
          //res.body.length.should.be.eql(0);
          done();
        });
    });
  });

});
