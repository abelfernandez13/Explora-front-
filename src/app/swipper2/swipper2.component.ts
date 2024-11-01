import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swipper2',
  template: `<swiper class="mySwiper">
  <ng-template swiperSlide><img class="imagen" src="./assets/img/Apto-202/sala1.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/Apto-202/sala.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/Apto-202/lavadero.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/Apto-202/baño.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/Apto-202/habitacion1.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/Apto-202/habitacion2.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/Apto-202/habitacion3.jpg" alt=""></ng-template
  >

</swiper>`,
  styleUrls: ['./swipper2.component.scss']
})
export class Swipper2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
