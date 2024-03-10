import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

import { GpllPostViewModule } from '../gpll-post-view.module';
import { GpllGamePostViewListComponent } from './gpll-post-view-list.component';

@NgModule({
    imports: [CommonModule, FormsModule, GpllPostViewModule, MatCardModule, MatFormFieldModule, ReactiveFormsModule],
    exports: [GpllGamePostViewListComponent],
    declarations: [GpllGamePostViewListComponent],
    providers: [],
})
export class GpllPostViewListModule {}

