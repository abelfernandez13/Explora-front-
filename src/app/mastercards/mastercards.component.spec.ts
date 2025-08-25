import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MastercardsComponent } from './mastercards.component';

describe('MastercardsComponent', () => {
  let component: MastercardsComponent;
  let fixture: ComponentFixture<MastercardsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MastercardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastercardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
