import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SwipperCsjComponent } from './swipper-csj.component';

describe('SwipperCsjComponent', () => {
  let component: SwipperCsjComponent;
  let fixture: ComponentFixture<SwipperCsjComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SwipperCsjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipperCsjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
