import { TestBed, async } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { of, ReplaySubject, throwError } from 'rxjs';

import { PostEffects } from '../post.effects';
import { PostService } from '@services';
import { fetchPosts } from '../post.actions';
const mockDb = require('../../../../../db.json');

describe('PostEffects', () => {
  let effects: PostEffects;
  let actions$: ReplaySubject<any>;
  const PostServiceMock = {
    getPosts: jest.fn(() => of(mockDb.posts)),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PostEffects,
        provideMockActions(() => actions$),
        { provide: PostService, useValue: PostServiceMock },
      ],
    });
    effects = TestBed.get(PostEffects);
  });

  it('should dispatch fetchPostsSucceeded', async(async () => {
    actions$ = new ReplaySubject(1);
    actions$.next(fetchPosts());
    effects.fetchPosts$.subscribe((result) => {
      expect(result).toMatchSnapshot();
    });
  }));

  it('should dispatch fetchPostsFailed', async(async () => {
    actions$ = new ReplaySubject(1);
    PostServiceMock.getPosts.mockImplementationOnce(() => {
      return throwError(new Error('Mock error'));
    });
    actions$.next(fetchPosts());
    effects.fetchPosts$.subscribe((result) => {
      expect(result).toMatchSnapshot();
    });
  }));
});
