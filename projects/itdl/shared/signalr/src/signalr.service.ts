import { APP_BASE_HREF } from '@angular/common';
import { Inject, Injectable, Injector } from '@angular/core';
import { RxHubConnection, RxHubConnectionCache, RxHubConnectionCacheable } from '@itdl/shared/common';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ShrlSignalrService {
    constructor(@Inject(APP_BASE_HREF) private baseUrl: string, private readonly injector: Injector) {}

    @RxHubConnectionCacheable()
    public createRxHubConnectionCacheable(path: string) {
        return this.createRxHubConnection(path);
    }

    public createRxHubConnection(path: string) {
        const hubConnection = new HubConnectionBuilder()
            .withUrl(`${this.baseUrl}/${path}`)
            .withAutomaticReconnect()
            .build();

        const rxHubConnection = new RxHubConnection(hubConnection, this.injector);

        return rxHubConnection;
    }

    public createRxHubConnectionAndStartCacheable(path: string) {
        const rxHubConnection = this.createRxHubConnectionCacheable(path);

        if (rxHubConnection.state !== 'Connected') return rxHubConnection.start();

        return new BehaviorSubject<RxHubConnection>(rxHubConnection);
    }

    public createRxHubConnectionAndStart(path: string) {
        const rxHubConnection = this.createRxHubConnection(path);

        if (rxHubConnection.state !== 'Connected') return rxHubConnection.start();

        return new BehaviorSubject<RxHubConnection>(rxHubConnection);
    }

    public stopAllConnections() {
        RxHubConnectionCache.forEach((rxHubConnection) => rxHubConnection.stop());
    }
}
