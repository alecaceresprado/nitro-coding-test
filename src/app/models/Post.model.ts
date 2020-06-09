export interface Post {
  id: number;
  location: string;
  time: string;
  author: string;
  text: string;
}

// Post ordering criteria enum
export enum OrderCriteria {
  WEEK = 'By posting week',
  AUTHOR = 'By author',
  LOCATION = 'By location',
}

export interface GroupingCacheModel {
  [OrderCriteria.WEEK]?: { [key: string]: Post[] };
  [OrderCriteria.LOCATION]?: { [key: string]: Post[] };
  [OrderCriteria.AUTHOR]?: { [key: string]: Post[] };
}
