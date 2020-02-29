const express = require('express');
const next = require('next');
const routes = require('../routes.js');
const mongoose = require('mongoose');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = routes.getRequestHandler(app);
const authServices = require('./services/auth');
const config = require('./config');
const Book = require('./models/book');
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

mongoose.connect(config.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database Connected');
    })
    .catch(err => console.log(err));

app.prepare()
    .then(() => {
        const server = express();
        server.use(express.json());
        server.use(express.urlencoded({ extended: true }));
        server.post('/api/v1/book', (req, res) => {
            const bookData = req.body;
            const book = new Book(bookData);

            book.save()
                .then((err, createBook) => {
                    if (err) return res.status(422).send(err);
                    return res.json(createBook);
                });

        });

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

