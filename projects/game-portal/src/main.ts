import { enableProdMode, StaticProvider } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ServerDataToken } from '@itdl/game-portal/common';

import { GamePortalAppModule } from './app/game-portal-app.module';
import { environment } from './environments/environment';

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}

const providers: StaticProvider[] = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] },
    { provide: ServerDataToken, useValue: null },
];

if (environment.production) {
    enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
    platformBrowserDynamic(providers)
        .bootstrapModule(GamePortalAppModule)
        .catch((err) => console.error(err));
});
