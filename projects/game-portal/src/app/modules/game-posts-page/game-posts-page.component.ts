import { Component } from '@angular/core';
import { GamePostApiService } from '@itdl/game-portal/features/posts/api/src/post.service';

@Component({
    selector: 'gpl-game-posts-page',
    templateUrl: './game-posts-page.component.html',
    styleUrls: ['./game-posts-page.component.scss'],
})
export class GamePostsPageComponent {
    posts$ = this.postService.getGamePosts();

    constructor(private postService: GamePostApiService) {}
}

