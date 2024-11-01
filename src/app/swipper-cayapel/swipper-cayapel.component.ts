import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swipper-cayapel',
  template: `<swiper class="mySwiper">
  <ng-template swiperSlide><img class="imagen" src="./assets/img/Cabaña-Ayapel/piscina-cabaña-ayapel.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/Cabaña-Ayapel/hool-cabaña-ayapel.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/Cabaña-Ayapel/hamacas-cabaña-ayapel.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/Cabaña-Ayapel/habitacion-cabaña-ayapel.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/Cabaña-Ayapel/habitacion1-cabaña-ayapel.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/Cabaña-Ayapel/habitacion3-cabaña-ayapel.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/Cabaña-Ayapel/escalera-cabaña-ayapel.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/Cabaña-Ayapel/escalera1-cabaña-ayapel.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/Cabaña-Ayapel/comedor-cabaña-ayapel.jpg" alt=""></ng-template>
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/Cabaña-Ayapel/sala-cabaña.jpeg" alt=""></ng-template>


  </swiper>`,
  styleUrls: ['./swipper-cayapel.component.scss']
})
export class SwipperCayapelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
