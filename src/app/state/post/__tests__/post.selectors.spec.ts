import { getPosts } from '../post.selectors';

describe('getPosts selector', () => {
  it('should return initialState', () => {
    const result = getPosts({
      posts: [],
    });
    expect(result).toEqual([]);
  });
  it('should return custom state', () => {
    const post = {
      id: 1,
      location: 'San Francisco',
      time: '1552657573',
      author: 'Happy User',
      text:
        'Proper PDF conversion ensures that every element of your document remains just as you left it.',
    };
    const result = getPosts({
      posts: [post],
    });
    expect(result).toEqual([post]);
  });
});
