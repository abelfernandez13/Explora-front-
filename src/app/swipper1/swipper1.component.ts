import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-swipper1',
  template: `<swiper class="mySwiper">
  <ng-template swiperSlide><img class="imagen" src="./assets/img/casablanca/casablanca-apto201-sala-hospedaje.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/casablanca/casablanca-apto201-sala1-hospedaje.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/casablanca/casablanca-apto201-habitacion3-hospedaje.jpg" alt=""></ng-template
  ><ng-template swiperSlide> <img class="imagen" src="./assets/img/casablanca/casablanca-apto201-habitacion2-hospedaje.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/casablanca/casablanca-apto201-habitacion1-hospedaje.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/casablanca/casablanca-apto201-habitacion-hospedaje.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/casablanca/casablanca-apto201-baño-hospedaje.jpg" alt=""></ng-template
  >
</swiper>`,
  styleUrls: ['./swipper1.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Swipper1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
