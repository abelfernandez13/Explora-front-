import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SwipperAptoVillaCarmenComponent } from './swipper-apto-villa-carmen.component';

describe('SwipperAptoVillaCarmenComponent', () => {
  let component: SwipperAptoVillaCarmenComponent;
  let fixture: ComponentFixture<SwipperAptoVillaCarmenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SwipperAptoVillaCarmenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipperAptoVillaCarmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
