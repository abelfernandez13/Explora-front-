import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModoAnfitrionComponent } from './modo-anfitrion.component';

describe('ModoAnfitrionComponent', () => {
  let component: ModoAnfitrionComponent;
  let fixture: ComponentFixture<ModoAnfitrionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModoAnfitrionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModoAnfitrionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
