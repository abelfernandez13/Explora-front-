import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Swipper1Component } from './swipper1.component';

describe('Swipper1Component', () => {
  let component: Swipper1Component;
  let fixture: ComponentFixture<Swipper1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Swipper1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Swipper1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
