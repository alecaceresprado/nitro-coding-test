import { postReducer } from '../post.reducer';
import { fetchPostsSucceeded } from '../post.actions';

describe('postReducer', () => {
  it('should return posts from store', () => {
    const post = {
      id: 1,
      location: 'San Francisco',
      time: '1552657573',
      author: 'Happy User',
      text:
        'Proper PDF conversion ensures that every element of your document remains just as you left it.',
    };
    const result = postReducer([], fetchPostsSucceeded({ posts: [post] }));
    expect(result).toEqual([post]);
  });
});
