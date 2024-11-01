import { Component, OnInit } from '@angular/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import {NgxGalleryThumbnailsComponent} from '@kolkov/ngx-gallery';


@Component({
  selector: 'app-torres-villamonica',
  templateUrl: './torres-villamonica.component.html',
  styleUrls: ['./torres-villamonica.component.scss']
})
export class TorresVillamonicaComponent implements OnInit {


  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  galleryThumbnailsComponent: NgxGalleryThumbnailsComponent[];

  constructor() { }

  ngOnInit(){

    this.galleryOptions = [
      {
        width: '80%',
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
          small: 'assets/img/Apto203/portada1.jpg',
          medium: 'assets/img/Apto203/portada1.jpg', //fachada
           big: 'assets/img/Apto203/portada1.jpg'
      },
      {
        small: 'assets/img/Apto203/portada.jpg',
        medium: 'assets/img/Apto203/portada.jpg',  //sala
         big: 'assets/img/Apto203/portada.jpg'
      },
      {
        small: 'assets/img/Apto203/habi1.jpg',
        medium: 'assets/img/Apto203/habi1.jpg', // sala1
         big: 'assets/img/Apto203/habi1.jpg'
      },
      {
        small:'assets/img/Apto203/habi2.jpg',
        medium:'assets/img/Apto203/habi2.jpg', //hab
        big:'assets/img/Apto203/habi2.jpg'
      },
      {
        small: 'assets/img/Apto203/habi3.jpg',
        medium: 'assets/img/Apto203/habi3.jpg', //hab
         big: 'assets/img/Apto203/habi3.jpg'
      },
      {
        small: 'assets/img/Apto203/patio.jpg',
        medium: 'assets/img/Apto203/patio.jpg',//hab
        big: 'assets/img/Apto203/patio.jpg'
      },
      {
        small: 'assets/img/Apto203/zona.jpg',
        medium: 'assets/img/Apto203/zona.jpg',//hab
        big: 'assets/img/Apto203/zona.jpg'
      },
      {
        small: 'assets/img/Apto203/baño.jpg',
        medium: 'assets/img/Apto203/baño.jpg', //baño
        big: 'assets/img/Apto203/baño.jpg'
      },
      {
        small: 'assets/img/faroles/baño-casafaroles-hospedaje-santamarta.jpg',
        medium: 'assets/img/faroles/baño-casafaroles-hospedaje-santamarta.jpg', //baño
        big: 'assets/img/faroles/baño-casafaroles-hospedaje-santamarta.jpg'
      },
    ];
  }
}
