import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EntityApiService } from '@itdl/game-portal/http';
import { from, Observable } from 'rxjs';

import { MOCK_POSTS } from '../../entities/src/models/mock-posts';
import { IGamePost } from '../../entities/src/models/post.model';

@Injectable({
    providedIn: 'root',
})
export class GamePostApiService extends EntityApiService<IGamePost, any> {
    protected getApiUrl(): string {
        return '/api/v1/game-posts';
    }

    constructor(private httpClient: HttpClient) {
        super();
    }

    // Fetch game posts from backend
    public getGamePosts(): Observable<IGamePost[]> {
        return from(
            new Promise<IGamePost[]>((resolve) => {
                setTimeout(() => {
                    resolve(MOCK_POSTS);
                }, 3000); // Simulate 3 seconds delay
            }),
        );
    }
}
