import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootLocalizationModule } from '@itdl/landing/localization';
import { HttpModule } from '@itdl/shared/http';
import { LandingAppComponent } from '@landing/landing-app.component';
import { LandingAppRoutingModule } from '@landing/landing-app-routing.module';
import { AuthModule } from 'angular-auth-oidc-client';

import { environment } from '../environments/environment';

@NgModule({
    declarations: [LandingAppComponent],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        HttpModule,
        LandingAppRoutingModule,
        RootLocalizationModule,
        AuthModule.forRoot({ config: environment.authConfig }),
    ],
    providers: [],
    bootstrap: [LandingAppComponent],
})
export class LandingAppModule {}
