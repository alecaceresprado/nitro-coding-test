import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { of } from 'rxjs';

import { PostService } from '@services';
import { Post } from '@models';
import { AppComponent } from './app.component';
const mockDb = require('../../db.json');

const PostServiceMock = {
  getPosts: jest.fn(() => of(mockDb.posts)),
};

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: PostService,
          useValue: PostServiceMock,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should fetch posts', () => {
    component.ngOnInit();
    component.posts$.subscribe((posts: Post[]) => {
      expect(posts).toMatchSnapshot();
    });
  });
});
