import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasafarolesComponent } from './casafaroles.component';

describe('CasafarolesComponent', () => {
  let component: CasafarolesComponent;
  let fixture: ComponentFixture<CasafarolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasafarolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasafarolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
