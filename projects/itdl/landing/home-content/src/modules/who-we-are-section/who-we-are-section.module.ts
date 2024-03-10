import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CollageModule } from '@itdl/shared/layout';

import { WhoWeAreSectionComponent } from './who-we-are-section.component';

@NgModule({
    imports: [CollageModule, CommonModule],
    declarations: [WhoWeAreSectionComponent],
    exports: [WhoWeAreSectionComponent],
})
export class WhoWeAreSectionModule {}
