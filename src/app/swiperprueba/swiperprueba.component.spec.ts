import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SwiperpruebaComponent } from './swiperprueba.component';

describe('SwiperpruebaComponent', () => {
  let component: SwiperpruebaComponent;
  let fixture: ComponentFixture<SwiperpruebaComponent>;

  beforeEach(waitForAsync(() => {
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
