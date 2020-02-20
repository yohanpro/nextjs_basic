const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const namespace = "http://localhost:3000/";
exports.checkJWT = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 15,
        jwksUri: 'https://dev-2e7udd5p.auth0.com/.well-known/jwks.json'
    }),
    audience: 'akEPVW71HpnNNu4hlbJ6h6BDd4YOVvO0',
    issuer: 'https://dev-2e7udd5p.auth0.com/',
    algorithms: ['RS256']
});



exports.checkRole = role => (req, res, next) => {
    const user = req.user;
    if (user && user[namespace + 'role'] === role) {
        next();
    } else {
        return res.status(401).send({ title: "Not Authorized" });
    }
};
