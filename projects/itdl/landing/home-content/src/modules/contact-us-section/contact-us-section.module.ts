import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ContactUsSectionComponent } from './contact-us-section.component';

@NgModule({
    imports: [CommonModule, MatFormFieldModule, MatInputModule],
    exports: [ContactUsSectionComponent],
    declarations: [ContactUsSectionComponent],
    providers: [],
})
export class ContactUsSectionModule {}
