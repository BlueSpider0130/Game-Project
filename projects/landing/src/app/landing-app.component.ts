import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { filter, tap } from 'rxjs';

@Component({
    selector: 'lnd-app',
    templateUrl: './landing-app.component.html',
    styleUrls: ['./landing-app.component.scss'],
})
export class LandingAppComponent implements OnInit {
    title = 'landing';

    constructor(private readonly oidcSecurityService: OidcSecurityService) {
        if (!this.oidcSecurityService.isAuthenticated) this.oidcSecurityService.authorize();
    }

    ngOnInit() {
        this.oidcSecurityService
            .checkAuth()
            .pipe(
                filter(({ isAuthenticated }) => !isAuthenticated),
                tap(() => this.oidcSecurityService.authorize()),
            )
            .subscribe();
    }
}
