import { postReducer } from '../post.reducer';
import { fetchPostsSucceeded, updatePost } from '../post.actions';

const post1 = {
  id: 1,
  location: 'San Francisco',
  time: '1552657573',
  author: 'Happy User',
  text:
    'Proper PDF conversion ensures that every element of your document remains just as you left it.',
};

const post2 = {
  id: 3,
  location: 'San Francisco',
  time: '1501690872999',
  author: 'Happy Developer',
  text: 'Digital transformation isn’t justa buzzword',
};

describe('postReducer', () => {
  it('should return posts from store', () => {
    const result = postReducer([], fetchPostsSucceeded({ posts: [post1] }));
    expect(result).toEqual([post1]);
  });

  it('should edit post', () => {
    const result = postReducer(
      [post1, post2],
      updatePost({ id: 1, location: 'Sydney', author: 'Happy Candidate' })
    );
    expect(result).toMatchSnapshot();
  });
});
