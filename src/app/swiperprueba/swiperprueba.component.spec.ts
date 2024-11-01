import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperpruebaComponent } from './swiperprueba.component';

describe('SwiperpruebaComponent', () => {
  let component: SwiperpruebaComponent;
  let fixture: ComponentFixture<SwiperpruebaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiperpruebaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperpruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
