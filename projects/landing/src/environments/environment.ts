import { OpenIdConfiguration } from 'angular-auth-oidc-client';

export const environment = {
    production: false,
    authConfig: <OpenIdConfiguration>{
        authority: 'https://localhost:6443',
        redirectUrl: `${window.location.origin}`,
        postLogoutRedirectUri: window.location.origin,
        clientId: 'landing.web',
        scope: 'openid profile offline_access landingapi.email.allread', // 'openid profile offline_access ' + your scopes
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        renewTimeBeforeTokenExpiresInSeconds: 60,
    },
};
