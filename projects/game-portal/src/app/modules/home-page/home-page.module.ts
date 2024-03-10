import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GpllHomeContentModule } from '@itdl/game-portal/contents/home-content';

import { GplHomePageComponent } from './home-page.component';
import { GplHomePageRoutingModule } from './home-page.routing.module';

@NgModule({
    declarations: [GplHomePageComponent],
    imports: [CommonModule, GplHomePageRoutingModule, GpllHomeContentModule],
    // imports: [CommonModule, GplHomePageRoutingModule],
})
export class GplHomePageModule {}
