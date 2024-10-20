import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipperCsjComponent } from './swipper-csj.component';

describe('SwipperCsjComponent', () => {
  let component: SwipperCsjComponent;
  let fixture: ComponentFixture<SwipperCsjComponent>;

  beforeEach(async(() => {
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
