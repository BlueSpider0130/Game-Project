import { NgModule } from '@angular/core';
import { GpllGameDefinitionApiService } from '@itdl/game-portal/features/game-definition/api';
import { GameDefinitionXSState } from '@itdl/game-portal/features/game-definition/ng-xs';
import { HttpModule } from '@itdl/shared/http';
import { NgxsModule } from '@ngxs/store';

@NgModule({
    imports: [HttpModule, NgxsModule.forFeature([GameDefinitionXSState])],
    providers: [GpllGameDefinitionApiService],
})
export class GpllGameDefinitionModule {}
