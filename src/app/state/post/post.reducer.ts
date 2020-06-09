import { createReducer, Action, on } from '@ngrx/store';

import { fetchPostsSucceeded } from './post.actions';
import { Post } from '@models';

export const postInitialState: Post[] = [];

const reducer = createReducer(
  postInitialState,
  on(fetchPostsSucceeded, (state, { posts }) => posts)
);

export function postReducer(state: Post[] | undefined, action: Action): Post[] {
  return reducer(state, action);
}
