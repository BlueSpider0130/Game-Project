import { Component, Input, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';

import { MenuItemConfig } from './models/menu-item.config.model';

@Component({
    selector: 'lndl-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent {
    @Input() config!: MenuItemConfig;

    @ViewChild(MatMenu) matMenu!: MatMenu;
}
