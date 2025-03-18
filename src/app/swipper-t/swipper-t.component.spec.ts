import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SwipperTComponent } from './swipper-t.component';

describe('SwipperTComponent', () => {
  let component: SwipperTComponent;
  let fixture: ComponentFixture<SwipperTComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SwipperTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipperTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
