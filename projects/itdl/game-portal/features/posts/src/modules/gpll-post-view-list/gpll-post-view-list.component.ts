import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MOCK_POSTS } from '../../../entities/src/models/mock-posts';
import { IGamePost } from '../../../entities/src/models/post.model';
import { GamePost } from '../../../entities/src/models/post.model';
import { MatCardModule } from '@angular/material/card';
import { GpllPostViewListModule } from './gpll-post-view-list.module';
import { GamePostsState } from '../../../ng-xs/src/game-posts.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'gpll-game-post-view-list',
  templateUrl: './gpll-post-view-list.component.html',
  styleUrls: ['./gpll-post-view-list.component.css'],
  providers: [DatePipe],
  //imports: [MatCardModule, GpllPostViewListModule],
  //standalone: true
})
export class GpllGamePostViewListComponent{

  constructor(private datePipe: DatePipe) {}

  // ngOnInit(): void {
  //     console.log("posts", this.posts)
  //   // this.filteredPosts = this.posts;
  //   // console.log(this.filteredPosts);
  // }

  // applyFilter(event?: Event): void {
  //   if (event && event.target) {
  //     const filterValue = (event.target as HTMLInputElement).value;
  //     this.filteredPosts = this.posts.filter(post =>
  //       post.name.toLowerCase().includes(filterValue.toLowerCase())
  //     );

  //     // Highlight filter input for 2 seconds
  //     this.filterHighlight = true;
  //     setTimeout(() => {
  //       this.filterHighlight = false;
  //     }, 2000);
  //   }
  // }

  formatDate(date: any): string {
    if (date) {
      return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
    }
    return '';
  }

  //@Select(GamePostsState.getGamePosts) gamePosts$: Observable<IGamePost[]> | undefined;
  
}
