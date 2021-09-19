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
  describe('/GET Member', () => {
    it('it should GET all Member and validate the first is Chair', (done) => {
      chai.request('https://fcc-strapi.herokuapp.com')
        .get('/Members')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.instanceOf(Array);
          res.body.length.should.be.greaterThan(0);
          let user = res.body[0];
          user.should.have.property('Role').which.is.eql('Chair');
          user.should.have.property('Visual_Order').which.is.eql(1);
          done();
        });
    });
  });

  describe('/GET Meeting Dates', () => {
    it('it should GET all meeting dates. There should be one in the future', (done) => {
      chai.request('https://fcc-strapi.herokuapp.com')
        .get('/Meeting-Dates')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.instanceOf(Array);
          res.body.length.should.be.greaterThan(0);
          let dates = res.body;
          let mostRecentDate = new Date();
          for (let i = 0; i < dates.length; i++) {
            if (dates[i] > mostRecentDate) {
              mostRecentDate = dates[i];
            }
          }
          mostRecentDate.should.have.greaterThan(new Date());
          done();
        });
    });
  });

});
