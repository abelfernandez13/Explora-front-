import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SwipperCayapelComponent } from './swipper-cayapel.component';

describe('SwipperCayapelComponent', () => {
  let component: SwipperCayapelComponent;
  let fixture: ComponentFixture<SwipperCayapelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SwipperCayapelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipperCayapelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
