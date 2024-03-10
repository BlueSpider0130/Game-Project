import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CollageModule } from '@itdl/shared/layout';

import { WhatWeDoSectionComponent } from './what-we-do-section.component';

@NgModule({
    imports: [CollageModule, CommonModule],
    declarations: [WhatWeDoSectionComponent],
    exports: [WhatWeDoSectionComponent],
})
export class WhatWeDoSectionModule {}
