import { NgModule } from '@angular/core';

import { XTranslatePipe } from './pipes/xtranslate.pipe';

@NgModule({
    imports: [],
    declarations: [XTranslatePipe],
    exports: [XTranslatePipe],
    providers: [],
})
export class ChildLocalizationModule {}
