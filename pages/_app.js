// import React from 'react';
// import App from 'next/app';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/main.scss';

// import auth0Client from '../services/auth0';

// export default class MyApp extends App {
//     static async getInitialProps({ Component, router, ctx }) {
//         let pageProps = {};
//         const user = process.browser ? await auth0Client.clientAuth() : await auth0Client.serverAuth(ctx.req);

//         if (Component.getInitialProps) {
//             console.log('myapp', ctx.req.headers);
//             pageProps = await Component.getInitialProps(ctx);
//             console.log('pageprops', pageProps);
//         }

//         const auth = { user, isAuthenticated: !!user };

//         return { pageProps, auth };
//     }

//     render() {
//         const { Component, pageProps, auth } = this.props;
//         return (
//             <Component {...pageProps} auth={auth} />
//         );
//     }
// }
import React from 'react';
import App, { Container } from 'next/app';

import auth0 from '../services/auth0';

// Stylings
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';

export default class MyApp extends App {

    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};
        const user = process.browser ? await auth0.clientAuth() : await auth0.serverAuth(ctx.req);

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        const auth = { user, isAuthenticated: !!user };

        return { pageProps, auth };
    }

    render() {
        const { Component, pageProps, auth } = this.props;

        return (
            <Component {...pageProps} auth={auth} />
        );
    }
}