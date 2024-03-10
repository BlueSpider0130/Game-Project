import { getWindowOutsideAngular } from '@itdl/shared/common';
import { OpenIdConfiguration } from 'angular-auth-oidc-client';

const windowObject = getWindowOutsideAngular();

export const environment = {
    production: true,
    tinyMceApiKey: 'qrnuo660vki1c05zj77v1c9lhtvdcyjf7fewvlr7kacjk5yy',
    authConfig: <OpenIdConfiguration>{
        authority: 'https://itdidentityauth.azurewebsites.net',
        redirectUrl: `${windowObject?.location?.origin}`,
        postLogoutRedirectUri: windowObject?.location?.origin,
        clientId: 'landing.web',
        scope: 'openid profile offline_access landingapi.email.allread', // 'openid profile offline_access ' + your scopes
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        renewTimeBeforeTokenExpiresInSeconds: 60,
    },
    odataApiUrl: 'https://itdgameportalapi.azurewebsites.net',
};
