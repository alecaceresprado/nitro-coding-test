import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';

import { PostDetailsComponent, EditFormComponent } from '../../../components';
const post = {
  id: 1,
  location: 'San Francisco',
  time: '1552657573',
  author: 'Happy User',
  text:
    'Proper PDF conversion ensures that every element of your document remains just as you left it.',
};
describe('PostDetailsComponent', () => {
  let component: PostDetailsComponent;
  let fixture: ComponentFixture<PostDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostDetailsComponent, EditFormComponent],
      providers: [
        provideMockStore({ initialState: { posts: [] } }),
        provideMockActions({} as any),
      ],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render - zrp', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('should render - post', () => {
    component.post = post;
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

  it('should toggle editMode correctly', () => {
    component.post = post;
    component.editMode = true;
    component.ngOnChanges();
    fixture.detectChanges();
    expect(component.editMode).toBeFalsy();
    component.toggleEditMode();
    fixture.detectChanges();
    expect(component.editMode).toBeTruthy();
  });
});
