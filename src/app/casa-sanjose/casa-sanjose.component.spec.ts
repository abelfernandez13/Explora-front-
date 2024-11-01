import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaSanjoseComponent } from './casa-sanjose.component';

describe('CasaSanjoseComponent', () => {
  let component: CasaSanjoseComponent;
  let fixture: ComponentFixture<CasaSanjoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasaSanjoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaSanjoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
