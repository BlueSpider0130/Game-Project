/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { Inject, NgModule, TransferState } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { IServerData, serverDataStateKey, ServerDataToken } from '@itdl/game-portal/common';

import { GamePortalAppComponent } from './game-portal-app.component';
import { GamePortalAppModule } from './game-portal-app.module';

@NgModule({
    imports: [GamePortalAppModule, ServerModule],
    bootstrap: [GamePortalAppComponent],
})
export class GamePortalAppServerModule {
    constructor(readonly transferState: TransferState, @Inject(ServerDataToken) readonly dataFromServer: IServerData) {
        delete (dataFromServer as any)['originalHtml'];
        transferState.set(serverDataStateKey, dataFromServer);
    }
}
