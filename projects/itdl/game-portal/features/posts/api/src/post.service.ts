import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGamePost } from '../../entities/src/models/post.model';
import { EntityApiService } from '@itdl/game-portal/http';

@Injectable({
  providedIn: 'root'
})
export class GamePostApiService extends EntityApiService<IGamePost, any> {
  protected getApiUrl(): string {
    return '/api/v1/game-posts';
  }

  constructor(private httpClient: HttpClient) {
    super();
  }

  // Fetch game posts from backend
  getGamePosts(): Observable<IGamePost[]> {
    return this.httpClient.get<IGamePost[]>(`${this.apiUrl}`);
  }
}
