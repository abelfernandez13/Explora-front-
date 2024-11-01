import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swipper-csj',
  template: `<swiper class="mySwiper">
  <ng-template swiperSlide><img class="imagen" src="./assets/img/casasanj/sala3-Casasan jose-hospedaje-santamarta-colombia.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/casasanj/habita1-Casasan jose-hospedaje-santamarta-colombia.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/casasanj/habita2-Casasan jose-hospedaje-santamarta-colombia.jpg" alt=""></ng-template
  ><ng-template swiperSlide><img class="imagen" src="./assets/img/casasanj/habitacion3-Casa san jose-hospedaje-santamarta-colombia (2).jpg" alt=""></ng-template
  >
</swiper>`,
  styleUrls: ['./swipper-csj.component.scss']
})
export class SwipperCsjComponent implements OnInit, AfterViewInit {

  constructor() { }
  ngAfterViewInit

  ngOnInit(): void {
  }

}
