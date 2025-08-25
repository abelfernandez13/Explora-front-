import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AptoVillaCarmenComponent } from './apto-villa-carmen.component';

describe('AptoVillaCarmenComponent', () => {
  let component: AptoVillaCarmenComponent;
  let fixture: ComponentFixture<AptoVillaCarmenComponent>;

  beforeEach(waitForAsync(() => {
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
