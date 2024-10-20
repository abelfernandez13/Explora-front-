import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastercardsComponent } from './mastercards.component';

describe('MastercardsComponent', () => {
  let component: MastercardsComponent;
  let fixture: ComponentFixture<MastercardsComponent>;

  beforeEach(async(() => {
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
