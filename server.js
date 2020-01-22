const express = require('express');
const next = require('next');
const routes = require('./routes.js');
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = routes.getRequestHandler(app);

// With express

app.prepare()
    .then(() => {
        const server = express();

        server.get('*', (req, res) => {
            return handle(req, res);
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

