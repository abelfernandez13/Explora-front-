import { Component, OnInit } from '@angular/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import {NgxGalleryThumbnailsComponent} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-apto-villamonica',
  templateUrl: './apto-villamonica.component.html',
  styleUrls: ['./apto-villamonica.component.scss']
})
export class AptoVillamonicaComponent implements OnInit {


  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  galleryThumbnailsComponent: NgxGalleryThumbnailsComponent[];

  constructor() { }

  ngOnInit(){

    this.galleryOptions = [
      {
        width: '85%',
        height: '450px',
        thumbnailsColumns: 5,
        thumbnailsRows: 1,
        imageArrowsAutoHide: true,
        thumbnailsArrowsAutoHide: true,
        thumbnailsMoveSize: 1,
        thumbnailsRemainingCount: true,
        previewCloseOnEsc: true,
        arrowPrevIcon: "fa fa-chevron-circle-left",
        arrowNextIcon: "fa fa-chevron-circle-right",
        imageAnimation: NgxGalleryAnimation.Slide

      },

      // max-width 800
      {
          breakpoint: 800,
          width: '50%',
          height: '300px',
          imagePercent: 80,

      },
      // max-width 400
      {
          breakpoint: 300,
          preview: false
      }
  ];

    this.galleryImages = [

     {
          small: 'assets/img/casablanca/casablanca-apto201-sala1-hospedaje.jpg',
          medium: 'assets/img/casablanca/casablanca-apto201-sala1-hospedaje.jpg', //fachada
           big: 'assets/img/casablanca/casablanca-apto201-sala1-hospedaje.jpg'
      },
      {
        small: 'assets/img/casablanca/casablanca-apto201-sala-hospedaje.jpg',
        medium: 'assets/img/casablanca/casablanca-apto201-sala-hospedaje.jpg',  //sala
         big: 'assets/img/casablanca/casablanca-apto201-sala-hospedaje.jpg'
      },
      {
        small: 'assets/img/casablanca/casablanca-apto201-habitacion3-hospedaje.jpg',
        medium: 'assets/img/casablanca/casablanca-apto201-habitacion3-hospedaje.jpg', // sala1
         big: 'assets/img/casablanca/casablanca-apto201-habitacion3-hospedaje.jpg'
      },
      {
        small:'assets/img/casablanca/casablanca-apto201-habitacion2-hospedaje.jpg',
        medium:'assets/img/casablanca/casablanca-apto201-habitacion2-hospedaje.jpg', //hab
        big:'assets/img/casablanca/casablanca-apto201-habitacion2-hospedaje.jpg'
      },
      {
        small: 'assets/img/casablanca/casablanca-apto201-habitacion1-hospedaje.jpg',
        medium: 'assets/img/casablanca/casablanca-apto201-habitacion1-hospedaje.jpg', //hab
         big: 'assets/img/casablanca/casablanca-apto201-habitacion1-hospedaje.jpg'
      },
      {
        small: 'assets/img/faroles/habitacion3-casafaroles-hospedaje-santamarta.jpg',
        medium: 'assets/img/faroles/habitacion3-casafaroles-hospedaje-santamarta.jpg',//hab
        big: 'assets/img/faroles/habitacion3-casafaroles-hospedaje-santamarta.jpg'
      },
      {
        small: 'assets/img/faroles/habitacion4-casafaroles-hospedaje-santamarta.jpg',
        medium: 'assets/img/faroles/habitacion4-casafaroles-hospedaje-santamarta.jpg',//hab
        big: 'assets/img/faroles/habitacion4-casafaroles-hospedaje-santamarta.jpg'
      },
      {
        small: 'assets/img/faroles/baño1-casafaroles-hospedaje-santamarta.jpg',
        medium: 'assets/img/faroles/baño1-casafaroles-hospedaje-santamarta.jpg', //baño
        big: 'assets/img/faroles/baño1-casafaroles-hospedaje-santamarta.jpg'
      },
      {
        small: 'assets/img/faroles/baño-casafaroles-hospedaje-santamarta.jpg',
        medium: 'assets/img/faroles/baño-casafaroles-hospedaje-santamarta.jpg', //baño
        big: 'assets/img/faroles/baño-casafaroles-hospedaje-santamarta.jpg'
      },


    ];


  }

}
