import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  PostsContainerComponent,
  GoupingSelectorComponent,
  PostsTreeComponent,
  PostDetailsComponent,
  EditFormComponent,
} from '../../../components';
import { OrderCriteria } from '@models';

const mockDb = require('../../../../../db.json');

describe('PostsContainerComponent', () => {
  let component: PostsContainerComponent;
  let fixture: ComponentFixture<PostsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PostsContainerComponent,
        GoupingSelectorComponent,
        PostsTreeComponent,
        PostDetailsComponent,
        EditFormComponent,
      ],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsContainerComponent);
    component = fixture.componentInstance;
    component.posts = mockDb.posts;
    component.ngOnChanges();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('should setup groupings correctly', () => {
    expect(component.groupings).toMatchSnapshot();
  });

  it('should change criteria and accumulate groupings', () => {
    component.handleCriteriaChange(OrderCriteria.LOCATION);
    fixture.detectChanges();
    expect(component.groupings).toMatchSnapshot();
  });

  it('should handle postClick correctly', () => {
    component.handlePostClick(3);
    fixture.detectChanges();
    expect(component.selectedPostId).toEqual(3);
  });

  it('should get the edited post', () => {
    component.selectedPostId = 3;
    component.ngOnChanges();
    expect(component.postToShow).toMatchSnapshot();
  });
});
