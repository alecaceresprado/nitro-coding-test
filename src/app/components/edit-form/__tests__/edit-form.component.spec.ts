import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';

import { EditFormComponent } from '../edit-form.component';

const post = {
  id: 1,
  location: 'San Francisco',
  time: '1552657573',
  author: 'Happy User',
  text:
    'Proper PDF conversion ensures that every element of your document remains just as you left it.',
};

describe('EditFormComponent', () => {
  let component: EditFormComponent;
  let fixture: ComponentFixture<EditFormComponent>;
  let successFn = { emit: jest.fn() };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditFormComponent],
      providers: [
        provideMockStore({ initialState: { posts: [] } }),
        provideMockActions({} as any),
      ],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormComponent);
    component = fixture.componentInstance;
    component.post = post;
    component.success = successFn as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('should handle submit', () => {
    component.onSubmit();
    expect(successFn.emit).toHaveBeenCalled();
  });
});
