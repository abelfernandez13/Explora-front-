import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AptoVillaCarmenComponent } from './apto-villa-carmen.component';

describe('AptoVillaCarmenComponent', () => {
  let component: AptoVillaCarmenComponent;
  let fixture: ComponentFixture<AptoVillaCarmenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AptoVillaCarmenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AptoVillaCarmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
