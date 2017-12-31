const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const config = require('./config');
const Complaint = require('./models/Complaint');

module.exports = function(app, config) {

  // Authentication middleware
  const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${config.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
    audience: config.AUTH0_API_AUDIENCE,
    issuer: `https://${config.AUTH0_DOMAIN}/`,
    algorithm: 'RS256'
  });

  /*
 |--------------------------------------
 | API Routes
 |--------------------------------------
 */

  // GET API root
  app.get('/api/', (req, res) => {
    Complaint.create({
      name: 'New Complaint'
    },(err, complaint) => {
      res.json(complaint);
    })
  });


  app.get('/api/complaints', jwtCheck, (req, res) => {

  });
};
