import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swipper-sanj',
  template: `<swiper class="mySwiper">
  <ng-template swiperSlide><img style="border-radius: 17px;" class="imagen" src="./assets/img/casasanj/sala3-Casasan jose-hospedaje-santamarta-colombia.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/casasanj/sala.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/casasanj/lavadero.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/casasanj/cocina2-Casasan jose-hospedaje-santamarta-colombia.jpg" alt=""></ng-template>
  <ng-template swiperSlide><img class="imagen" src="./assets/img/casasanj/habita1-Casasan jose-hospedaje-santamarta-colombia.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/casasanj/habitacion-Casasan jose-hospedaje-santamarta-colombia.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/casasanj/habita2-Casasan jose-hospedaje-santamarta-colombia.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/casasanj/baño1-Casasan jose-hospedaje-santamarta-colombia.jpg" alt=""></ng-template
  >
</swiper>`,
  styleUrls: ['./swipper-sanj.component.scss']
})
export class SwipperSanjComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
