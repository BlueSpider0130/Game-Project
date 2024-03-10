import { DatePipe } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { IGamePost } from '../../../entities/src/models/post.model';

@Component({
    selector: 'gpll-game-post-view-list',
    templateUrl: './gpll-post-view-list.component.html',
    styleUrls: ['./gpll-post-view-list.component.css'],
    providers: [DatePipe],
    //imports: [MatCardModule, GpllPostViewListModule],
    //standalone: true
})
export class GpllGamePostViewListComponent implements OnInit, OnDestroy {
    @Input() posts$!: Observable<IGamePost[]>;

    nonFilteredPosts!: IGamePost[];
    filteredPosts!: IGamePost[];
    source!: Subscription;
    filterHighlight = false;
    filterText = '';

    constructor(private datePipe: DatePipe) {}

    ngOnInit() {
        this.source = this.posts$.subscribe((posts: IGamePost[]) => {
            this.nonFilteredPosts = posts;
            this.applyFilter();
        });
    }

    ngOnDestroy() {
        this.source.unsubscribe();
    }

    public applyFilter() {
        this.filteredPosts = this.nonFilteredPosts.filter((post) =>
            post.name.toLowerCase().includes(this.filterText.toLowerCase()),
        );
        // Highlight filter input for 2 seconds
        this.filterHighlight = true;
        setTimeout(() => {
            this.filterHighlight = false;
        }, 2000);
    }

    public formatDate(date: any): string {
        if (date) {
            return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
        }
        return '';
    }

    //@Select(GamePostsState.getGamePosts) gamePosts$: Observable<IGamePost[]> | undefined;
}

