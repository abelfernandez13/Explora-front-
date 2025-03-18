import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CasafarolesComponent } from './casafaroles.component';

describe('CasafarolesComponent', () => {
  let component: CasafarolesComponent;
  let fixture: ComponentFixture<CasafarolesComponent>;

  beforeEach(waitForAsync(() => {
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
