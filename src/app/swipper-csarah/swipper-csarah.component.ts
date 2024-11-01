import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swipper-csarah',
  template: `<swiper class="mySwiper">
  <ng-template swiperSlide><img class="imagen" src="./assets/img/Casasarah/fachada.jpeg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/Casasarah/piscina.jpeg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/Casasarah/pasillo.jpeg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/Casasarah/hab1.jpeg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/Casasarah/hab2.jpeg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/Casasarah/hab3.jpeg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/Casasarah/hab4.jpeg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/Casasarah/hab5.jpeg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/Casasarah/hab6.jpeg" alt=""></ng-template>
</swiper>`,
  styleUrls: ['./swipper-csarah.component.scss']
})
export class SwipperCsarahComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
