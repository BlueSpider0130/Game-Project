import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamePostsPageComponent } from './game-posts-page.component';

const routes: Routes = [{ path: '', component: GamePostsPageComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GamePostsPageRoutingModule {}

