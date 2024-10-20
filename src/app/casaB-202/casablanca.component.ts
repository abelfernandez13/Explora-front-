import { Component, OnInit } from '@angular/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import {NgxGalleryThumbnailsComponent} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-casablanca',
  templateUrl: './casablanca.component.html',
  styleUrls: ['./casablanca.component.scss']
})
export class CasablancaComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  galleryThumbnailsComponent: NgxGalleryThumbnailsComponent[];

  constructor() { }

  ngOnInit(){

    this.galleryOptions = [
      {
        width: '88%',
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
          small: 'assets/img/Apto-202/sala1.jpg',
          medium: 'assets/img/Apto-202/sala1.jpg', //sala1
           big: 'assets/img/Apto-202/sala1.jpg'
      },
      {
        small: 'assets/img/Apto-202/sala.jpg',
        medium: 'assets/img/Apto-202/sala.jpg',  //sala
         big: 'assets/img/Apto-202/sala.jpg'
      },
      {
        small: 'assets/img/Apto-202/lavadero.jpg',
        medium: 'assets/img/Apto-202/lavadero.jpg', // lavadero
         big: 'assets/img/Apto-202/lavadero.jpg'
      },
      {
        small:'assets/img/Apto-202/baño.jpg',
        medium:'assets/img/Apto-202/baño.jpg', //baño
        big:'assets/img/Apto-202/baño.jpg'
      },

    ];


  }





}
