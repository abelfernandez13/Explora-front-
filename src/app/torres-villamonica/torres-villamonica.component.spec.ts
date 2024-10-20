import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TorresVillamonicaComponent } from './torres-villamonica.component';

describe('TorresVillamonicaComponent', () => {
  let component: TorresVillamonicaComponent;
  let fixture: ComponentFixture<TorresVillamonicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorresVillamonicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorresVillamonicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
