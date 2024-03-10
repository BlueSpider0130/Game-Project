import { Component, inject, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { UserActions } from '@itdl/game-portal/features/user/ng-xs';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';

@Component({
    selector: 'gpl-app-root',
    templateUrl: './game-portal-app.component.html',
    styleUrls: ['./game-portal-app.component.scss'],
})
export class GamePortalAppComponent implements OnInit {
    private readonly matIconRegistry = inject(MatIconRegistry);
    private readonly domSanitizer = inject(DomSanitizer);

    @Dispatch() generateUserId = () => new UserActions.GenerateUserId();

    ngOnInit(): void {
        this.generateUserId();
        this.matIconRegistry.addSvgIcon(
            'simple-color-avatar',
            this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/avatars/simple-color-avatar.svg'),
        );
    }
}
