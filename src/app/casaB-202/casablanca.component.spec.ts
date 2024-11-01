import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasablancaComponent } from './casablanca.component';

describe('CasablancaComponent', () => {
  let component: CasablancaComponent;
  let fixture: ComponentFixture<CasablancaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasablancaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasablancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
