import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from '@itdl/shared/layout';

import { AuthConfigModule } from '../../../itdl/landing/auth/src/auth-config.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
    declarations: [AppComponent],
    imports: [AppRoutingModule, AuthConfigModule, BrowserAnimationsModule, BrowserModule, HeaderModule, StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
