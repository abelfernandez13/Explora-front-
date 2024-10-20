import { Component, OnInit } from '@angular/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import {NgxGalleryThumbnailsComponent} from '@kolkov/ngx-gallery';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-casafaroles',
  templateUrl: './casafaroles.component.html',
  styleUrls: ['./casafaroles.component.scss']
})

export class CasafarolesComponent implements OnInit {

    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
    galleryThumbnailsComponent: NgxGalleryThumbnailsComponent[];
    datosTrans:any[]

   constructor(private _http:HttpClient) {

  this._http.get('https://production.wompi.co/v1/merchants/pub_prod_lpSQ1LZMPqUDct37PTUhQvckDOrubaSy')
        .subscribe( (data:any) =>{

         this.datosTrans = Object.values(data)

         console.log(this.datosTrans)
     })
  }
//3054274057  buscar ->
   ngOnInit() {

    this.galleryOptions = [
      {
        width: '85%',
        height: '400px',
        thumbnailsColumns: 4,
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
          height: '600px',
          imagePercent: 80,

      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
  ];

    this.galleryImages = [

     {
          small: 'assets/img/faroles/casafaroles-hospedaje-santamarta.jpg',
          medium: 'assets/img/faroles/casafaroles-hospedaje-santamarta.jpg', //fachada
           big: 'assets/img/faroles/casafaroles-hospedaje-santamarta.jpg'
      },
      {
        small: 'assets/img/faroles/sala-casafaroles-hospedaje-santamarta.jpg',
        medium: 'assets/img/faroles/sala-casafaroles-hospedaje-santamarta.jpg',  //sala
         big: 'assets/img/faroles/habitacion1-casafaroles-hospedaje-santamarta.jpg'
      },
      {
        small: 'assets/img/faroles/sala1-casafaroles-hospedaje-santamarta.jpg',
        medium: 'assets/img/faroles/sala1-casafaroles-hospedaje-santamarta.jpg', // sala1
         big: 'assets/img/faroles/sala1-casafaroles-hospedaje-santamarta.jpg'
      },
      {
        small: 'assets/img/faroles/habitacion1-casafaroles-hospedaje-santamarta.jpg',
        medium: 'assets/img/faroles/habitacion1-casafaroles-hospedaje-santamarta.jpg', //hab
        big: 'assets/img/faroles/habitacion1-casafaroles-hospedaje-santamarta.jpg'
      },
      {
        small: 'assets/img/faroles/habitacion2-casafaroles-hospedaje-santamarta.jpg',
        medium: 'assets/img/faroles/habitacion2-casafaroles-hospedaje-santamarta.jpg', //hab
         big: 'assets/img/faroles/habitacion2-casafaroles-hospedaje-santamarta.jpg'
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
