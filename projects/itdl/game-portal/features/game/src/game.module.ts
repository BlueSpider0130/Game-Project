import { NgModule } from '@angular/core';
import { GpllGameApiService } from '@itdl/game-portal/features/game/api';
import { GameXSState } from '@itdl/game-portal/features/game/ng-xs';
import { HttpModule } from '@itdl/shared/http';
import { NgxsModule } from '@ngxs/store';

@NgModule({
    imports: [HttpModule, NgxsModule.forFeature([GameXSState])],
    providers: [GpllGameApiService],
})
export class GpllGameModule {}
