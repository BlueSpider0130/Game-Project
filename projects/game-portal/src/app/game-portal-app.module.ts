import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import {
    GplAppConfigProviderToken,
    IGplAppConfig,
    IGplAppConfigProvider,
    StorageKeys,
} from '@itdl/game-portal/common/config';
import { AuthXSState } from '@itdl/game-portal/features/auth/ng-xs';
import { UserXSState } from '@itdl/game-portal/features/user/ng-xs';
import { API_URL } from '@itdl/game-portal/http/api';
import { getWindowOutsideAngular } from '@itdl/shared/common';
import { ShrlUiActionsModule } from '@itdl/shared/common/ui-actions';
import { BaseUrlModule } from '@mintplayer/ng-base-url';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { NgxStripeModule } from 'ngx-stripe';

import { environment } from '../environments/environment';
import { GamePortalAppComponent } from './game-portal-app.component';
import { GamePortalAppRoutingModule } from './game-portal-app.routing.module';
import { GplLocalizationModule } from './localization/localization.module';

class GplAppConfigProvider implements IGplAppConfigProvider {
    public readonly config: IGplAppConfig = {
        apiUrl: environment.odataApiUrl,
    };
}

const windowObject = getWindowOutsideAngular();

@NgModule({
    declarations: [GamePortalAppComponent],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        BaseUrlModule,
        BrowserAnimationsModule,
        GamePortalAppRoutingModule,
        GplLocalizationModule,
        ShrlUiActionsModule,
        AuthModule.forRoot({
            domain: 'itdgroup.eu.auth0.com',
            clientId: '8IPIPnczRsgeD72Ff4dqrjjrCu1nTywR',
            authorizationParams: {
                redirect_uri: `${windowObject?.location?.origin}`,
                audience: 'https://itdgameportalodataapi',
                scope: 'openid profile email create:games read:games update:games delete:games',
            },
            httpInterceptor: {
                allowedList: [
                    // {
                    //     uri: `${environment.odataApiUrl}/api/v1/Games*`,
                    //     allowAnonymous: true,
                    // },
                    // {
                    //     uri: `${environment.odataApiUrl}/api/v1/GameDefinitions*`,
                    //     allowAnonymous: true,
                    // },
                    // {
                    //     uri: `${environment.odataApiUrl}/api/v1/Games*`,
                    //     httpMethod: 'GET',
                    //     tokenOptions: {
                    //         authorizationParams: {
                    //             scope: 'openid profile email read:games',
                    //         },
                    //     },
                    // },
                ],
            },

            // errorPath: `${window.location.origin}/gamedefs/gamedefs/Kroko/games`,
        }),
        // GpllTranslationModule,
        NgxsModule.forRoot([UserXSState, AuthXSState]),
        NgxsStoragePluginModule.forRoot({ key: StorageKeys.keys }),
        // NgxsLoggerPluginModule.forRoot(),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        NgxsDispatchPluginModule.forRoot(),
        ServiceWorkerModule.register('ngsw-worker.js', {
            // enabled: !isDevMode(),
            enabled: true,
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000',
        }),
        // AuthModule.forRoot({ config: environment.authConfig }),
        NgxStripeModule.forRoot('pk_test_hyAomfLH7SvDOmecyWStO1ak'),
    ],
    providers: [
        { provide: API_URL, useValue: environment.odataApiUrl },
        {
            provide: GplAppConfigProviderToken,
            useValue: new GplAppConfigProvider(),
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthHttpInterceptor,
            multi: true,
        },
    ],
    bootstrap: [GamePortalAppComponent],
})
export class GamePortalAppModule {}
