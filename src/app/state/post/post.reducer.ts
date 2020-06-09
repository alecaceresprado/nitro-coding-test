import { createReducer, Action, on } from '@ngrx/store';

import { fetchPostsSucceeded, updatePost } from './post.actions';
import { Post } from '@models';

export const postInitialState: Post[] = [];

const reducer = createReducer(
  postInitialState,
  on(fetchPostsSucceeded, (state, { posts }) => posts),
  on(updatePost, (state, {id, author, location}) =>
    state.map(post => {
      if(post.id === id) {
        return {
          ...post,
          location,
          author
        };
      }
      return post;
    })
  )
);

export function postReducer(state: Post[] | undefined, action: Action): Post[] {
  return reducer(state, action);
}
