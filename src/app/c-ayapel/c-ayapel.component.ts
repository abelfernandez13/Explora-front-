import { Component, OnInit } from '@angular/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import {NgxGalleryThumbnailsComponent} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-c-ayapel',
  templateUrl: './c-ayapel.component.html',
  styleUrls: ['./c-ayapel.component.scss']
})
export class CAyapelComponent implements OnInit {

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
        small: 'assets/img/Cabaña-Ayapel/piscina-cabaña-ayapel.jpg',
        medium: 'assets/img/Cabaña-Ayapel/piscina-cabaña-ayapel.jpg',  //sala
         big: 'assets/img/Cabaña-Ayapel/piscina-cabaña-ayapel.jpg'
      },
     {
          small: 'assets/img/Cabaña-Ayapel/hool-cabaña-ayapel.jpg',
          medium: 'assets/img/Cabaña-Ayapel/hool-cabaña-ayapel.jpg', //fachada
           big: 'assets/img/Cabaña-Ayapel/hool-cabaña-ayapel.jpg'
      },

      {
        small: 'assets/img/Cabaña-Ayapel/hamacas-cabaña-ayapel.jpg',
        medium: 'assets/img/Cabaña-Ayapel/hamacas-cabaña-ayapel.jpg', // sala1
         big: 'assets/img/Cabaña-Ayapel/hamacas-cabaña-ayapel.jpg'
      },
      {
        small:'assets/img/Cabaña-Ayapel/habitacion-cabaña-ayapel.jpg',
        medium:'assets/img/Cabaña-Ayapel/habitacion-cabaña-ayapel.jpg', //hab
        big:'assets/img/Cabaña-Ayapel/habitacion-cabaña-ayapel.jpg'
      },
      {
        small: 'assets/img/Cabaña-Ayapel/habitacion1-cabaña-ayapel.jpg',
        medium: 'assets/img/Cabaña-Ayapel/habitacion1-cabaña-ayapel.jpg', //hab
         big: 'assets/img/Cabaña-Ayapel/habitacion1-cabaña-ayapel.jpg'
      },
      {
        small: 'assets/img/Cabaña-Ayapel/habitacion3-cabaña-ayapel.jpg',
        medium: 'assets/img/Cabaña-Ayapel/habitacion3-cabaña-ayapel.jpg',//hab
        big: 'assets/img/Cabaña-Ayapel/habitacion3-cabaña-ayapel.jpg'
      },
      {
        small: 'assets/img/Cabaña-Ayapel/escalera-cabaña-ayapel.jpg',
        medium: 'assets/img/Cabaña-Ayapel/escalera-cabaña-ayapel.jpg',//hab
        big: 'assets/img/Cabaña-Ayapel/escalera-cabaña-ayapel.jpg'
      },
      {
        small: 'assets/img/Cabaña-Ayapel/escalera1-cabaña-ayapel.jpg',
        medium: 'assets/img/Cabaña-Ayapel/escalera1-cabaña-ayapel.jpg', //baño
        big: 'assets/img/Cabaña-Ayapel/escalera1-cabaña-ayapel.jpg'
      },
      {
        small: 'assets/img/Cabaña-Ayapel/comedor-cabaña-ayapel.jpg',
        medium: 'assets/img/Cabaña-Ayapel/comedor-cabaña-ayapel.jpg', //baño
        big: 'assets/img/Cabaña-Ayapel/comedor-cabaña-ayapel.jpg'
      },
    ];
  }
}
