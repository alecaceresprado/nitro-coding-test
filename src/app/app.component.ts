import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PostService } from '@services';
import { Post } from '@models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public posts$: Observable<Post[]>;

  constructor(private postService: PostService) {}

  public ngOnInit() {
    this.posts$ = this.postService.getPosts();
  }
}
