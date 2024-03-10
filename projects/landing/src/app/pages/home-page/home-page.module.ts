import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeContentModule } from '@itdl/landing/home-content';
import { ChildLocalizationModule } from '@itdl/landing/localization';

import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';

@NgModule({
    declarations: [HomePageComponent],
    imports: [ChildLocalizationModule, CommonModule, HomeContentModule, HomePageRoutingModule],
})
export class HomePageModule {}
