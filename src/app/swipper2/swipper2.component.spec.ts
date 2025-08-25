import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Swipper2Component } from './swipper2.component';

describe('Swipper2Component', () => {
  let component: Swipper2Component;
  let fixture: ComponentFixture<Swipper2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Swipper2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Swipper2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
