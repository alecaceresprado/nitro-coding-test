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

export interface PostTree {
  [key: string]: Post[];
}

export interface GroupingCacheModel {
  [OrderCriteria.WEEK]?: PostTree;
  [OrderCriteria.LOCATION]?: PostTree;
  [OrderCriteria.AUTHOR]?: PostTree;
}
