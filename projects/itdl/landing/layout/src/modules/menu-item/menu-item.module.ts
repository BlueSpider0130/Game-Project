import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { ChildLocalizationModule } from '@itdl/landing/localization';
import { ScrollToLogicAnchorModule } from '@itdl/shared/navigation';

import { MenuItemComponent } from './menu-item.component';

@NgModule({
    declarations: [MenuItemComponent],
    exports: [MenuItemComponent],
    imports: [ChildLocalizationModule, CommonModule, MatMenuModule, ScrollToLogicAnchorModule],
})
export class MenuItemModule {}
