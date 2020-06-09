import { createFeatureSelector } from '@ngrx/store';

import { Post } from '@models';

export const getPosts = createFeatureSelector<Post[]>(
  'posts'
);
