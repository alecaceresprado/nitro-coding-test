import { Component, Input, OnChanges } from '@angular/core';

import { Post } from '@models';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnChanges {
  @Input() public post: Post;

  public editMode = false;

  public ngOnChanges() {
    this.editMode = false;
  }

  public get postDate(): string {
    const postDate = new Date(Number(this.post.time));
    return `${postDate.getFullYear()}/${postDate.getMonth()}/${postDate.getDay()}`;
  }

  public toggleEditMode(): void {
    this.editMode = !this.editMode;
  }
}
