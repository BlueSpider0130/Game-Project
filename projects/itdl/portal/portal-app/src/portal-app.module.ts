import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PortalAppComponent } from './portal-app.component';
import { PortalAppRoutingModule } from './portal-app-routing.module';

@NgModule({
    declarations: [PortalAppComponent],
    imports: [BrowserAnimationsModule, BrowserModule, CommonModule, PortalAppRoutingModule],
    bootstrap: [PortalAppComponent],
})
export class PortalAppModule {}
