import { createFeatureSelector } from '@ngrx/store';

import { AppState } from '../app.reducer';
import { Post } from '@models';

export const getPosts = createFeatureSelector<Post[]>(
  'posts'
);
