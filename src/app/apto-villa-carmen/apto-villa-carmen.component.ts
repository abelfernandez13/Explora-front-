import { Component, OnInit } from '@angular/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import {NgxGalleryThumbnailsComponent} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-apto-villa-carmen',
  templateUrl: './apto-villa-carmen.component.html',
  styleUrls: ['./apto-villa-carmen.component.scss']
})
export class AptoVillaCarmenComponent implements OnInit {

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
        small: 'assets/img/AptoVillaCarmen/sala-apto-villa-carmen.jpg',
        medium: 'assets/img/AptoVillaCarmen/sala-apto-villa-carmen.jpg',  //sala
         big: 'assets/img/AptoVillaCarmen/sala-apto-villa-carmen.jpg'
      },
     {
          small: 'assets/img/AptoVillaCarmen/habitacion1-apto-villa-carmen.jpg',
          medium: 'assets/img/AptoVillaCarmen/habitacion1-apto-villa-carmen.jpg', //Habitacion1
           big: 'assets/img/AptoVillaCarmen/habitacion1-apto-villa-carmen.jpg'
      },

      {
        small: 'assets/img/AptoVillaCarmen/habitacion2-apto-villa-carmen.jpg',
        medium: 'assets/img/AptoVillaCarmen/habitacion2-apto-villa-carmen.jpg', // Habitacion2
         big: 'assets/img/AptoVillaCarmen/habitacion2-apto-villa-carmen.jpg'
      },
      {
        small: 'assets/img/AptoVillaCarmen/baño-apto-villa-carmen.jpg',
        medium: 'assets/img/AptoVillaCarmen/baño-apto-villa-carmen.jpg', //baño
         big: 'assets/img/AptoVillaCarmen/baño-apto-villa-carmen.jpg'
      }
    ];
  }

}
