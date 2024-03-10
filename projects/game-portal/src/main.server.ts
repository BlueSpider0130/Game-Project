/***************************************************************************************************
 * Initialize the server environment - for example, adding DOM built-in types to the global scope.
 *
 * NOTE:
 * This import must come before any imports (direct or transitive) that rely on DOM built-ins being
 * available, such as `@angular/elements`.
 */
import '@angular/platform-server/init';
import 'zone.js/node';
import 'reflect-metadata';

import { enableProdMode, StaticProvider } from '@angular/core';
import { renderModule } from '@angular/platform-server';
import { ServerDataToken } from '@itdl/game-portal/common';
import { BOOT_FUNC_PARAMS } from '@mintplayer/ng-base-url';
import { createServerRenderer } from 'aspnet-prerendering';

import { GamePortalAppServerModule } from './app/game-portal-app.server.module';

enableProdMode();

export { GamePortalAppServerModule } from './app/game-portal-app.server.module';
export default createServerRenderer((params) => {
    const providers: StaticProvider[] = [
        { provide: BOOT_FUNC_PARAMS, useValue: params },
        { provide: ServerDataToken, useValue: params.data },
    ];

    const options = {
        document: params.data.originalHtml,
        url: params.url,
        extraProviders: providers,
    };

    // Bypass ssr api call cert warnings in development
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

    const renderPromise = renderModule(GamePortalAppServerModule, options);

    return renderPromise.then((html) => ({ html }));
});
