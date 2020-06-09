import { OrderCriteria } from '@models';
import { groupBy } from '../post.grouper.utils';
const mockDb = require('../../../../db.json');

describe('groupBy', () => {
  it('should return empty array', () => {
    expect(groupBy([], OrderCriteria.WEEK)).toMatchSnapshot();
  });

  it('should return weekGroup', () => {
    expect(groupBy(mockDb.posts, OrderCriteria.WEEK)).toMatchSnapshot();
  });

  it('should return location', () => {
    expect(groupBy(mockDb.posts, OrderCriteria.LOCATION)).toMatchSnapshot();
  });

  it('should return author', () => {
    expect(groupBy(mockDb.posts, OrderCriteria.AUTHOR)).toMatchSnapshot();
  });
});
