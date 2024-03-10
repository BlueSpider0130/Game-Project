// game-posts.state.ts

import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { GamePostApiService } from '../../api/src/post.service';
import { FetchGamePosts, StoreGamePosts } from './game-posts.action';
import { Injectable } from '@angular/core';
import { IGamePost } from '../../entities/src/models/post.model';

export interface GamePostsStateModel {
  gamePosts: IGamePost[];
}

@State<GamePostsStateModel>({
  name: 'gamePosts',
  defaults: {
    gamePosts: []
  }
})
@Injectable()
export class GamePostsState {

  constructor(private gamePostApiService: GamePostApiService) {}

  @Selector()
  static getGamePosts(state: GamePostsStateModel) {
    console.log(state.gamePosts);
    return state.gamePosts;
  }

  @Action(FetchGamePosts)
  fetchGamePosts(ctx: StateContext<GamePostsStateModel>) {
    return this.gamePostApiService.getGamePosts().pipe(
      tap((gamePosts: IGamePost[]) => {
        ctx.dispatch(new StoreGamePosts(gamePosts));
      })
    );
  }

  @Action(StoreGamePosts)
  storeGamePosts(ctx: StateContext<GamePostsStateModel>, action: StoreGamePosts) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      gamePosts: action.posts
    });
  }
}
