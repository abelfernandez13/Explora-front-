import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AptoVillamonicaComponent } from './apto-villamonica.component';

describe('AptoVillamonicaComponent', () => {
  let component: AptoVillamonicaComponent;
  let fixture: ComponentFixture<AptoVillamonicaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AptoVillamonicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AptoVillamonicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
