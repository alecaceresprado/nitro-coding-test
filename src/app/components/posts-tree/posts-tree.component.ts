import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { PostTree, Post } from '@models';

@Component({
  selector: 'app-posts-tree',
  templateUrl: './posts-tree.component.html',
  styleUrls: ['./posts-tree.component.scss'],
})
export class PostsTreeComponent implements OnChanges {
  @Input() public postTree: PostTree;
  @Input() public selectedPostId: number;
  @Output() public handlePostClick: EventEmitter<number> = new EventEmitter();

  public parentLevel: string[];
  public selectedParent: string;
  public postsToList: Post[];

  constructor() {}

  ngOnChanges(): void {
    this.parentLevel = Object.keys(this.postTree);
  }

  public handleParentClick(parent: string): void {
    this.selectedParent = parent;
    this.postsToList = this.postTree[parent];
  }
}
