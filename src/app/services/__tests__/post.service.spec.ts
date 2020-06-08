import { of } from 'rxjs';

import { PostService } from '../post.service';
import { Post } from '@models';
const mockDb = require('../../../../db.json');

const httpClientMock = {
  get: jest.fn(() => of(mockDb.posts)),
};

describe('PostService', () => {
  let service: PostService;

  beforeAll(() => {
    service = new PostService(httpClientMock as any);
  });

  it('should get posts', () => {
    service.getPosts().subscribe((posts: Post[]) => {
      expect(posts).toMatchSnapshot();
    });
  });
});
