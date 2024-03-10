// game-posts.action.ts

import { IGamePost } from "../../entities/src/models/post.model";

export class FetchGamePosts {
  static readonly type = '[Posts] Fetch Game Posts';
}

export class StoreGamePosts {
  static readonly type = '[Posts] Store Game Posts';
  constructor(public posts: IGamePost[]) {}
}
