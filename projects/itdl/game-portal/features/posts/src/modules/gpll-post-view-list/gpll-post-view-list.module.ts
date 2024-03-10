import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GpllPostViewModule } from '../gpll-post-view.module';
import { GpllGamePostViewListComponent } from './gpll-post-view-list.component';

@NgModule({
  imports: [CommonModule, GpllPostViewModule, GpllPostViewListModule],
  exports: [GpllGamePostViewListComponent],
  declarations: [GpllGamePostViewListComponent],
  providers: [],
})
export class GpllPostViewListModule { }
