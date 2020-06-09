import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { PostService } from '@services';
import {
  fetchPosts,
  fetchPostsSucceeded,
  fetchPostsFailed,
} from './post.actions';
import { Post } from '@models';

@Injectable()
export class PostEffects {
  /*
   * @listen [POST] fetch posts
   * @dispatch [POST] fetch post - SUCCESS
   * @dispatch [POST] fetch post - FAIL
   */
  public fetchPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchPosts),
      switchMap(() =>
        this.postService.getPosts().pipe(
          map((posts: Post[]) => fetchPostsSucceeded({ posts })),
          catchError(() => of(fetchPostsFailed()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private postService: PostService) {}
}
