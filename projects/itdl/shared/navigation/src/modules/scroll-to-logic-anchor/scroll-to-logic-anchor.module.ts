import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavigationModule } from '../navigation/navigation.module';
import { ScrollToLogicAnchorDirective } from './scroll-to-logic-anchor.directive';

@NgModule({
    declarations: [ScrollToLogicAnchorDirective],
    exports: [ScrollToLogicAnchorDirective],
    imports: [CommonModule, NavigationModule],
})
export class ScrollToLogicAnchorModule {}
