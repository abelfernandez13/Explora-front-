import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipperAptoVillaCarmenComponent } from './swipper-apto-villa-carmen.component';

describe('SwipperAptoVillaCarmenComponent', () => {
  let component: SwipperAptoVillaCarmenComponent;
  let fixture: ComponentFixture<SwipperAptoVillaCarmenComponent>;

  beforeEach(async(() => {
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
