import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoupingSelectorComponent } from '../gouping-selector.component';

describe('GoupingSelectorComponent', () => {
  let component: GoupingSelectorComponent;
  let fixture: ComponentFixture<GoupingSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoupingSelectorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoupingSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(fixture).toMatchSnapshot();
  });
});
