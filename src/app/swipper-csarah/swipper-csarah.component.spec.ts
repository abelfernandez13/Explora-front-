import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipperCsarahComponent } from './swipper-csarah.component';

describe('SwipperCsarahComponent', () => {
  let component: SwipperCsarahComponent;
  let fixture: ComponentFixture<SwipperCsarahComponent>;

  beforeEach(async(() => {
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
