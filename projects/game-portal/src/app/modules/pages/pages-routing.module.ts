import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from '../main-layout/main-layout.component';

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () =>
                    import(
                        /* webpackChunkName: "gpl-home-page.module.chunk" */
                        '../home-page/home-page.module'
                    ).then((m) => m.GplHomePageModule),
            },
            // {
            //     path: 'gamedefs/:code',
            //     redirectTo: 'gamedefs',
            // },
            {
                path: 'gamedefs',
                loadChildren: () =>
                    import(
                        /* webpackChunkName: "gpl-game-defs-page.module.chunk" */
                        '../game-defs-page/game-defs-page.module'
                    ).then((m) => m.GplGameDefsPageModule),
            },
            {
                path: 'game-posts',
                //component: GpllGamePostViewListComponent
                loadChildren: () =>
                    import(
                        /* webpackChunkName: "gpll-post-view.module.chunk" */
                        '../game-posts-page/game-posts-page.module' // Adjust the path to the correct module
                    ).then((m) => m.GamePostsPageModule),
            },
            {
                path: 'game',
                loadChildren: () =>
                    import(
                        /* webpackChunkName: "gpl-game-page.module.chunk" */
                        '../game-page/game-page.module'
                    ).then((m) => m.GplGamePageModule),
            },
            {
                path: 'lobby',
                loadChildren: () =>
                    import(
                        /* webpackChunkName: "gpl-lobby-page.module.chunk" */
                        '../lobby-page/lobby-page.module'
                    ).then((m) => m.GplLobbyPageModule),
            },
        ],
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GplPagesRoutingModule {}

