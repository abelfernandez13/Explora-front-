import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SwipperCsarahComponent } from './swipper-csarah.component';

describe('SwipperCsarahComponent', () => {
  let component: SwipperCsarahComponent;
  let fixture: ComponentFixture<SwipperCsarahComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SwipperCsarahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipperCsarahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
