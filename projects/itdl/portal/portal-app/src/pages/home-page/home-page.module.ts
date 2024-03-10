import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FooterModule, HeaderModule } from '@itdl/shared/layout';

import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';

@NgModule({
    declarations: [HomePageComponent],
    imports: [CommonModule, FooterModule, HeaderModule, HomePageRoutingModule, MatSidenavModule],
})
export class HomePageModule {}
