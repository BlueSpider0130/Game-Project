import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContactUsPageComponent } from './contact-us-page.component';
import { ContactUsPageRoutingModule } from './contact-us-page-routing.module';

@NgModule({
    declarations: [ContactUsPageComponent],
    imports: [CommonModule, ContactUsPageRoutingModule],
})
export class ContactUsPageModule {}
