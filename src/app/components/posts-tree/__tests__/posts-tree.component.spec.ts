import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsTreeComponent } from '../posts-tree.component';

const postTreeMock = {
  'Week 4': [
    {
      id: 5,
      location: 'Dublin',
      time: '1553080742',
      author: 'Happy Manager',
      text:
        'A modern PDF annotator that canaccommodate all of the cooks in a very busy kitchen is what your employees really need.',
    },
    {
      id: 6,
      location: 'Dublin',
      time: '1553099742',
      author: 'Happy Manager',
      text:
        'An integratedproductivity solution breaks information through barriers and allows workers to collaborate in real time.',
    },
  ],
  'Week 24': [
    {
      id: 1,
      location: 'San Francisco',
      time: '1591699872486',
      author: 'Happy User',
      text:
        'Proper PDF conversion ensures that every element of your document remains just as you left it.',
    },
    {
      id: 4,
      location: 'Sydney',
      time: '1591699872999',
      author: 'Happy Developer',
      text:
        'An expectation of digital efficiency has become the norm in our daily lives',
    },
  ],
  'Week 31': [
    {
      id: 2,
      location: 'San Francisco',
      time: '1501690872486',
      author: 'Happy User',
      text:
        'The modernworkplace is increasingly digital, and workflows are constantly evolving. ',
    },
    {
      id: 3,
      location: 'SanFrancisco',
      time: '1501690872999',
      author: 'Happy Developer',
      text: 'Digital transformation isn’t justa buzzword',
    },
  ],
};

describe('PostsTreeComponent', () => {
  let component: PostsTreeComponent;
  let fixture: ComponentFixture<PostsTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostsTreeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsTreeComponent);
    component = fixture.componentInstance;
    component.postTree = postTreeMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('should handle parent click', () => {
    component.handleParentClick('Week 4');
    fixture.detectChanges();
    expect(component.selectedParent).toEqual('Week 4');
    expect(component.postsToList).toEqual(postTreeMock['Week 4']);
  });
});
