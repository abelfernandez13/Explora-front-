import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CAyapelComponent } from './c-ayapel.component';

describe('CAyapelComponent', () => {
  let component: CAyapelComponent;
  let fixture: ComponentFixture<CAyapelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CAyapelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CAyapelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
