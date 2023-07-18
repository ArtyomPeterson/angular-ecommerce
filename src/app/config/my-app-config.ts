export default {
    oidc: {
        //public identifier
        clientId: '0oaa4kih7x9xTrN4m5d7',
        //issuer of tokens
        //URL when aythorizing with Okta Authorization Server
        issuer: 'https://dev-45397698.okta.com/oauth2/default',
        //once user logs in send them here
        redirectUri: 'http://localhost:4200/login/callback',        //provide access to information about a user
        scopes: ['openid', 'profile', 'email']
    }
}
