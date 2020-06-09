import { Component, Input, OnChanges } from '@angular/core';

import { Post, OrderCriteria, GroupingCacheModel } from '@models';
import { groupBy } from '@utils';

@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.scss'],
})
export class PostsContainerComponent implements OnChanges {
  @Input() public posts: Post[];

  public selectedCriteria: OrderCriteria = OrderCriteria.WEEK;
  public groupings: GroupingCacheModel = {};
  public selectedPostId: number;
  public postToShow: Post;

  public ngOnChanges() {
    this.setupGrouping();
  }

  public handleCriteriaChange(criteriaElement: OrderCriteria): void {
    this.selectedCriteria = criteriaElement;
    this.setupGrouping();
  }

  public handlePostClick(postId): void {
    this.selectedPostId = postId;
    this.postToShow = this.posts.find((post) => post.id === postId);
  }

  private setupGrouping(): void {
    this.postToShow = undefined;
    this.groupings[this.selectedCriteria] = groupBy(
      this.posts,
      this.selectedCriteria
    );
  }
}
