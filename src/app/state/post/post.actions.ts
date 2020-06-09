import { createAction, props } from '@ngrx/store';

import { Post } from '@models';

export const fetchPosts = createAction('[POST] fetch posts');
export const fetchPostsSucceeded = createAction('[POST] fetch post - SUCCESS', props<{posts: Post[]}>());
export const fetchPostsFailed = createAction('[POST] fetch post - FAIL');
