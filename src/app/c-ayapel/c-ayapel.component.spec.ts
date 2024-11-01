import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CAyapelComponent } from './c-ayapel.component';

describe('CAyapelComponent', () => {
  let component: CAyapelComponent;
  let fixture: ComponentFixture<CAyapelComponent>;

  beforeEach(async(() => {
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
