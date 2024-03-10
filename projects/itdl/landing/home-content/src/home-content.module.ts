import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LndlNavModule } from '@itdl/landing/layout';
import { FooterModule, HeaderModule, WithButtonToScrollModule } from '@itdl/shared/layout';
import { NavigationModule } from '@itdl/shared/navigation';

import { HomeContentComponent } from './home-content.component';
import { ContactUsSectionModule } from './modules/contact-us-section/contact-us-section.module';
import { GreetingSectionModule } from './modules/greeting-section/greeting-section.module';
import { WhatWeDoSectionModule } from './modules/what-we-do-section/what-we-do-section.module';
import { WhoWeAreSectionModule } from './modules/who-we-are-section/who-we-are-section.module';

@NgModule({
    imports: [
        CommonModule,
        ContactUsSectionModule,
        FooterModule,
        GreetingSectionModule,
        HeaderModule,
        LndlNavModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        NavigationModule,
        WhatWeDoSectionModule,
        WhoWeAreSectionModule,
        WithButtonToScrollModule,
    ],
    exports: [HomeContentComponent],
    declarations: [HomeContentComponent],
    providers: [],
})
export class HomeContentModule {}
