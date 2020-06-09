import { ActionReducerMap } from '@ngrx/store';

import { Post } from '@models';
import { postReducer } from './post';

export interface AppState {
  posts: Post[];
}

export const appReducer: ActionReducerMap<AppState> = {
  posts: postReducer,
};
