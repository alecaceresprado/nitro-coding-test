import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailsComponent } from '../post-details.component';

describe('PostDetailsComponent', () => {
  let component: PostDetailsComponent;
  let fixture: ComponentFixture<PostDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostDetailsComponent],
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
    component.post = {
      id: 1,
      location: 'San Francisco',
      time: '1552657573',
      author: 'Happy User',
      text:
        'Proper PDF conversion ensures that every element of your document remains just as you left it.',
    };
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });
});
