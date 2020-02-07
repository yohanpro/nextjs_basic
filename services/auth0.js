import auth0 from 'auth0-js';
import Cookies from 'js-cookie';

class Auth0 {
    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: 'dev-2e7udd5p.auth0.com',
            clientID: 'akEPVW71HpnNNu4hlbJ6h6BDd4YOVvO0',
            redirectUri: 'http://localhost:3000/callback',
            responseType: 'token id_token',
            scope: 'openid profile'
        });
        this.login = this.login.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.logout = this.logout.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }
    handleAuthentication() {
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => {

                if (authResult && authResult.accessToken && authResult.idToken) {
                    this.setSession(authResult);
                    resolve();
                } else if (err) {
                    reject(err);
                    console.log(err);
                }
            });
        });
    }

    setSession(authResult) {
        //savetoken
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        Cookies.set('user', authResult.idTokenPayload);
        Cookies.set('jwt', authResult.idToken);
        Cookies.set('expiresAt', expiresAt);
    }

    login() {
        this.auth0.authorize();
    }
    isAuthenticated() {
        const expiresAt = Cookies.getJSON('expiresAt');
        console.log('isAuth', new Date().getTime() < expiresAt);
        return new Date().getTime() < expiresAt;
    }
    logout() {
        Cookies.remove('user');
        Cookies.remove('jwt');
        Cookies.remove('expiresAt');
        this.auth0.logout({
            returnTo: '',
            clientID: 'akEPVW71HpnNNu4hlbJ6h6BDd4YOVvO0'
        });
    }

    clientAuth() {
        return this.isAuthenticated();
    }

    serverAuth(req) {
        console.log('server', req.headers.cookie);
        if (req.headers.cookie) {
            const expiresAtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith("expiresAt="));
            if (!expiresAtCookie) return undefined;

            const expiresAt = expiresAtCookie.split('=')[1];
            return new Date().getTime() < expiresAt;
        }
    }
};

const auth0Client = new Auth0();

export default auth0Client;