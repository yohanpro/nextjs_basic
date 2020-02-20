const express = require('express');
const next = require('next');
const routes = require('../routes.js');
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = routes.getRequestHandler(app);
const authServices = require('./services/auth');

// With express

const secretData = [
    {
        title: '안녕',
        description: "저리가라 임마"
    },
    {
        title: "그래 안녕?",
        description: "너나 저리가라"

    }
];
app.prepare()
    .then(() => {
        const server = express();
        server.get('/api/v1/secret', authServices.checkJWT, (req, res) => {
            return res.json(secretData);
        });
        server.get('/api/v1/onlysiteowner', authServices.checkJWT, authServices.checkRole("siteOwner"), (req, res) => {
            return res.json(secretData);
        });
        server.get('*', (req, res) => {
            return handle(req, res);
        });
        server.use(function (err, req, res, next) {
            if (err.name === 'UnauthorizedError') {
                res.status(401).send('invalid token...');
            }
        });
        server.use(handle).listen(3000, err => {
            if (err) throw err;
            console.log('Server is no on 3000');
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });

