import { Component, OnInit,NO_ERRORS_SCHEMA } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-swipper-sanj',
  templateUrl: './swipper-sanj.component.html',
  styleUrls: ['./swipper-sanj.component.scss'],

  providers: [Swiper]

})
export class SwipperSanjComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
