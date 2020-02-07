import React from 'react';
import App from 'next/app';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';

import auth0Client from '../services/auth0';
export default class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};
        const isAuthenticated = process.browser ? auth0Client.clientAuth() : auth0Client.serverAuth(ctx.req);
        console.log(isAuthenticated);
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Component {...pageProps} />
        );
    }
}
