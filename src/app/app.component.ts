import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Post } from '@models';
import { AppState, fetchPosts, getPosts } from '@state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public posts$: Observable<Post[]>;

  constructor(private store: Store<AppState>) {}

  public ngOnInit() {
    this.store.dispatch(fetchPosts());
    this.posts$ = this.store.pipe(select(getPosts));
  }
}
