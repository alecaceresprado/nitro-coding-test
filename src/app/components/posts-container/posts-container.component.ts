import { Component, Input } from '@angular/core';

import { Post } from '@models';

@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.scss']
})
export class PostsContainerComponent {
  @Input() public posts: Post[];

}
