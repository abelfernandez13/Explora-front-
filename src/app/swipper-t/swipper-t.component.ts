import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swipper-t',
  template: `<swiper class="mySwiper">
  <ng-template swiperSlide><img class="imagen" src="./assets/img/Apto203/portada1.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/Apto203/patio.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/Apto203/zona.jpeg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/Apto203/parqueadero.jpeg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/Apto203/cocina.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/Apto203/habi2.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/Apto203/habi1.jpg" alt=""></ng-template
  >
</swiper>`,
  styleUrls: ['./swipper-t.component.scss']
})
export class SwipperTComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
