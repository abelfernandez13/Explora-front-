import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swipper-apto-villa-carmen',
  template: `<swiper class="mySwiper">
  <ng-template swiperSlide><img class="imagen" src="./assets/img/AptoVillaCarmen/sala-apto-villa-carmen.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/AptoVillaCarmen/habitacion1-apto-villa-carmen.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/AptoVillaCarmen/habitacion2-apto-villa-carmen.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/AptoVillaCarmen/baño-apto-villa-carmen.jpg" alt=""></ng-template
  ></swiper>`,
  styleUrls: ['./swipper-apto-villa-carmen.component.scss']
})
export class SwipperAptoVillaCarmenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
