import { NgModule } from '@angular/core';
import { GamePostsState } from '../../ng-xs/src/game-posts.state';
import { GamePostApiService } from '../../api/src/post.service';
import { HttpModule } from '@itdl/shared/http';
import { NgxsModule } from '@ngxs/store';

@NgModule({
    imports: [HttpModule, NgxsModule.forFeature([GamePostsState])],
    providers: [GamePostApiService ],
})
export class GpllPostViewModule {}
