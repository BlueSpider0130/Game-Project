import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MenuItemModule } from '../menu-item/menu-item.module';
import { LndlNavComponent } from './nav.component';

@NgModule({
    imports: [CommonModule, MenuItemModule],
    exports: [LndlNavComponent],
    declarations: [LndlNavComponent],
    providers: [],
})
export class LndlNavModule {}
