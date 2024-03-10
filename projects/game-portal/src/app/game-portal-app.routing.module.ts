import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import(
                /* webpackChunkName: "gpl-pages.module.chunk" */
                './modules/pages/pages.module'
            ).then((m) => m.GplPagesModule),
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            initialNavigation: 'enabledBlocking',
            // preloadingStrategy: PreloadAllModules,
        }),
    ],
    exports: [RouterModule],
})
export class GamePortalAppRoutingModule {}
