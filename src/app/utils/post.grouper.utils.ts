import { Post, OrderCriteria } from '@models';

export const groupBy = (posts: Post[], criteria: OrderCriteria) =>
  posts.reduce((acc, curr) => {
    let parent;
    switch (criteria) {
      case OrderCriteria.WEEK:
        const date = new Date(Number(curr.time));
        parent = `Week ${getWeekNumber(date)}`;
        break;
      case OrderCriteria.LOCATION:
        parent = curr.location;
        break;
      case OrderCriteria.AUTHOR:
        parent = curr.author;
        break;
    }
    acc[parent] = [...(acc[parent] || []), curr];
    return acc;
  }, {});

function getWeekNumber(date: Date): number {
  const firstDayOfYear: Date = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear: number =
    (date.getTime() - firstDayOfYear.getTime()) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}
