import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swiper',
  template: `<swiper class="mySwiper">
  <ng-template swiperSlide><img class="imagen" src="./assets/img/faroles/casafaroles-hospedaje-santamarta.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen img-fluid" src="./assets/img/faroles/habitacion1-casafaroles-hospedaje-santamarta.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/faroles/habitacion2-casafaroles-hospedaje-santamarta.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/faroles/habitacion3-casafaroles-hospedaje-santamarta.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/faroles/sala-casafaroles-hospedaje-santamarta.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/faroles/sala1-casafaroles-hospedaje-santamarta.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/faroles/baño-casafaroles-hospedaje-santamarta.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/faroles/baño1-casafaroles-hospedaje-santamarta.jpg" alt=""></ng-template>
</swiper>`,
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
