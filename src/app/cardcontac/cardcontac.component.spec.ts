import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcontacComponent } from './cardcontac.component';

describe('CardcontacComponent', () => {
  let component: CardcontacComponent;
  let fixture: ComponentFixture<CardcontacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardcontacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardcontacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
