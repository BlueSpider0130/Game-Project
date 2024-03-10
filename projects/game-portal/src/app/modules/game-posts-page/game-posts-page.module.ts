import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GpllPostViewListModule } from '@itdl/game-portal/features/posts/src/modules/gpll-post-view-list/gpll-post-view-list.module';

import { GamePostsPageComponent } from './game-posts-page.component';
import { GamePostsPageRoutingModule } from './game-posts-page.routing.module';

@NgModule({
    declarations: [GamePostsPageComponent],
    imports: [CommonModule, GamePostsPageRoutingModule, GpllPostViewListModule],
    exports: [GamePostsPageComponent],
})
export class GamePostsPageModule {}

