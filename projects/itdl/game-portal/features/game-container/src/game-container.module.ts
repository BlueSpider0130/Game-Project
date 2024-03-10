import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { GameContainerXSState } from '@itdl/game-portal/features/game-container/ng-xs';
import { ShrlSignalrModule } from '@itdl/shared/signalr';
import { NgxsModule } from '@ngxs/store';
import { RxLet } from '@rx-angular/template/let';

import { GpllGameContainerComponent } from './game-container.component';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatIconModule,
        RxLet,
        ShrlSignalrModule,
        NgxsModule.forFeature([GameContainerXSState]),
    ],
    declarations: [GpllGameContainerComponent],
    exports: [GpllGameContainerComponent],
})
export class GpllGameContainerModule {}
