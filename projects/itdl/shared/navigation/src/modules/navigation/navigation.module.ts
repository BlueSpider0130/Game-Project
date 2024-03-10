import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LogicAnchorDirective } from './directives/logic-anchor.directive';
import { ScrollToSectionDirective } from './directives/scroll-to-section.directive';
import { LogicAnchorStoreService } from './services/logic-anchor-registration.service';
import { NavigationService } from './services/navigation.service';

@NgModule({
    imports: [CommonModule],
    exports: [LogicAnchorDirective, ScrollToSectionDirective],
    declarations: [LogicAnchorDirective, ScrollToSectionDirective],
    providers: [LogicAnchorStoreService, NavigationService],
})
export class NavigationModule {}
