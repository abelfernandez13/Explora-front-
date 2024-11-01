import { Component, OnInit } from '@angular/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import {NgxGalleryThumbnailsComponent} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-casa-sarah',
  templateUrl: './casa-sarah.component.html',
  styleUrls: ['./casa-sarah.component.scss']
})
export class CasaSarahComponent implements OnInit {


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
        small: 'assets/img/Casasarah/piscina.jpeg',
        medium: 'assets/img/Casasarah/piscina.jpeg',  //sala
         big: 'assets/img/Casasarah/piscina.jpeg'
      },
     {
          small: 'assets/img/Casasarah/fachada.jpeg',
          medium: 'assets/img/Casasarah/fachada.jpeg', //fachada
           big: 'assets/img/Casasarah/fachada.jpeg'
      },

      {
        small: 'assets/img/Casasarah/pasillo.jpeg',
        medium: 'assets/img/Casasarah/pasillo.jpeg', // sala1
         big: 'assets/img/Casasarah/pasillo.jpeg'
      },
      {
        small:'assets/img/Casasarah/hab1.jpeg',
        medium:'assets/img/Casasarah/hab1.jpeg', //hab
        big:'assets/img/Casasarah/hab1.jpeg'
      },
      {
        small: 'assets/img/Casasarah/hab2.jpeg',
        medium: 'assets/img/Casasarah/hab2.jpeg', //hab
         big: 'assets/img/Casasarah/hab2.jpeg'
      },
      {
        small: 'assets/img/Casasarah/hab3.jpeg',
        medium: 'assets/img/Casasarah/hab3.jpeg',//hab
        big: 'assets/img/Casasarah/hab3.jpeg'
      },
      {
        small: 'assets/img/Casasarah/hab4.jpeg',
        medium: 'assets/img/Casasarah/hab4.jpeg',//hab
        big: 'assets/img/Casasarah/hab4.jpeg'
      },
      {
        small: 'assets/img/Casasarah/hab5.jpeg',
        medium: 'assets/img/Casasarah/hab5.jpeg', //baño
        big: 'assets/img/Casasarah/hab5.jpeg'
      },
      {
        small: 'assets/img/Casasarah/hab6.jpeg',
        medium: 'assets/img/Casasarah/hab6.jpeg', //baño
        big: 'assets/img/Casasarah/hab6.jpeg'
      },
      {
        small: 'assets/img/Casasarah/baño.jpeg',
        medium: 'assets/img/Casasarah/baño.jpeg', //baño
        big: 'assets/img/Casasarah/baño.jpeg'
      },
      {
        small: 'assets/img/Casasarah/baño2.jpeg',
        medium: 'assets/img/Casasarah/baño2.jpeg', //baño
        big: 'assets/img/Casasarah/baño2.jpeg'
      },
    ];
  }
}
