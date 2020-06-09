import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsContainerComponent } from '../posts-container.component';
import { GoupingSelectorComponent } from '../../gouping-selector/gouping-selector.component';
import { OrderCriteria } from '@models';

const mockDb = require('../../../../../db.json');

describe('PostsContainerComponent', () => {
  let component: PostsContainerComponent;
  let fixture: ComponentFixture<PostsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostsContainerComponent, GoupingSelectorComponent],
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
});
