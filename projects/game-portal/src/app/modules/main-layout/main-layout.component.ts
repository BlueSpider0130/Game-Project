import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserPreferenceState } from '@itdl/game-portal/features/user-preferences';
import { GpllFooterComponent, GpllHeaderComponent } from '@itdl/game-portal/layout';
import { Theme } from '@itdl/game-portal/ui';
import { ShrlLayoutComponent } from '@itdl/shared/layout';
import { Store } from '@ngxs/store';
import { RxState } from '@rx-angular/state';
import { map, tap } from 'rxjs';

@Component({
    selector: 'gpl-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss'],
    standalone: true,
    imports: [CommonModule, ShrlLayoutComponent, GpllHeaderComponent, GpllFooterComponent, RouterModule],
    providers: [RxState],
})
export class MainLayoutComponent {
    public readonly themeClasses: Record<Theme, string> = {
        'dark': 'dark-theme mat-app-background mat-typography',
        'light': 'light-theme mat-app-background mat-typography',
    };

    public theme$ = this.store.select(UserPreferenceState.theme).pipe(
        map((theme) => this.themeClasses[theme]),
        tap((themeClass) => (this.document.body.className = themeClass)),
    );

    constructor(
        private readonly store: Store,
        @Inject(DOCUMENT) private readonly document: Document,
        private readonly state: RxState<object>,
    ) {
        this.state.hold(this.theme$);
    }
}
