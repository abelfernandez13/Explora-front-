import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaSarahComponent } from './casa-sarah.component';

describe('CasaSarahComponent', () => {
  let component: CasaSarahComponent;
  let fixture: ComponentFixture<CasaSarahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasaSarahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaSarahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
