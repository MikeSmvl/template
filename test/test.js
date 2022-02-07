// Import the dependencies for testing
import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/index.js'

// Configure chai
chai.use(chaiHttp)
chai.should()

describe('App', () => {
  describe('GET /', () => {
    it('should return "Hello World!"', (done) => {
      chai
        .request(app)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200)
          res.text.should.be.equal('Hello World!')
          done()
        })
    })
  })
})
