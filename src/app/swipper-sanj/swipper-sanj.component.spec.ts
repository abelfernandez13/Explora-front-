import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SwipperSanjComponent } from './swipper-sanj.component';

describe('SwipperSanjComponent', () => {
  let component: SwipperSanjComponent;
  let fixture: ComponentFixture<SwipperSanjComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SwipperSanjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipperSanjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
