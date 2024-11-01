import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  imagen: any[] = [
    {name:'"VIAJAR TE HACE MAS FELIZ"',
    img:'assets/img/fondos/fondo1.jpg',
   },
      {
      name:'"TODO EN EXCESO ES MALO MENOS VIAJAR"',
      img:'assets/img/fondos/fondo2.jpg',
      },
      {
        name:'"INVIERTE MAS EN EXPERIENCIAS MENOS EN COSAS"',
        img:'assets/img/fondos/fondo3.jpg',
       }
    ];



  constructor(private config: NgbCarouselConfig) {
    config.interval = 0;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }

  ngOnInit() {
  }

}
