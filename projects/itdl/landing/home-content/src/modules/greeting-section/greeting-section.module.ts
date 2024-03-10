import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { GreetingSectionComponent } from './greeting-section.component';

@NgModule({
    imports: [CommonModule, MatButtonModule],
    exports: [GreetingSectionComponent],
    declarations: [GreetingSectionComponent],
    providers: [],
})
export class GreetingSectionModule {}
