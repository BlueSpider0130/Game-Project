// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { getWindowOutsideAngular } from '@itdl/shared/common';
import { OpenIdConfiguration } from 'angular-auth-oidc-client';

const windowObject = getWindowOutsideAngular();

export const environment = {
    production: false,
    tinyMceApiKey: 'qrnuo660vki1c05zj77v1c9lhtvdcyjf7fewvlr7kacjk5yy',
    authConfig: <OpenIdConfiguration>{
        authority: 'https://localhost:6443',
        redirectUrl: `${windowObject?.location?.origin}`,
        postLogoutRedirectUri: windowObject?.location?.origin,
        clientId: 'landing.web',
        scope: 'openid profile offline_access landingapi.email.allread', // 'openid profile offline_access ' + your scopes
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        renewTimeBeforeTokenExpiresInSeconds: 60,
    },
    odataApiUrl: 'https://localhost:7188',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
