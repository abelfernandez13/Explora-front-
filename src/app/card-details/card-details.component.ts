import { Component, inject, Input, OnInit } from "@angular/core";
import {
  NgxGalleryAnimation,
  NgxGalleryImage,
  NgxGalleryOptions,
} from "ngx-gallery";
import { LoadPropertysService } from "../shared/services/load-propertys.service";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { CommonModule } from "@angular/common";
import { Photo } from "../interface/Photo";
import { Lightbox, LightboxModule } from 'ngx-lightbox';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClient } from "@angular/common/http";
import  { AddUserComponent }  from "../add-user/add-user.component";
import { LocationService } from '../shared/services/location.service';

@Component({
  selector: "app-card-details",
  templateUrl: "./card-details.component.html",
  standalone:true,
  imports:[MatToolbarModule,RouterModule,CommonModule,LightboxModule,GoogleMapsModule],
  providers:[AddUserComponent ],
  styleUrls: ["./card-details.component.scss"],
})
export class CardDetailsComponent implements OnInit {
  google: any;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  private currentId: string;
  imagePaths:any;
rawImagePath:any;
  data: Photo;
  dato:any;
  imageUrl:any;
  fullUrl:any;
  albums:any
  title:string;
coordenadas:any

  @Input() direccion: string = ''; // recibe la dirección desde otro componente
  lat!: number;
  lng!: number;
  id:string
  mapaListo: boolean = false;
    zoom = 15;
    coords:any
  
  constructor(
    private loadDataService: LoadPropertysService,
    private route: ActivatedRoute,
    private lightbox: Lightbox,
    private http: HttpClient,
    private router: Router,
    private locationService: LocationService
  ) {
    this.currentId = this.route.snapshot.params.id;
    
  }

  ngOnInit():void {

  // const ubicaciones = JSON.parse(localStorage.getItem('ubicaciones') || '[]');




    
     const coords = this.locationService.getCoords();

  if (coords.lat && coords.lng) {
    this.lat = coords.lat;
    this.lng = coords.lng;
    this.direccion = coords.direccion;
    console.log('Coordenadas cargadas:', this.lat, this.lng);
  } else {
    console.warn('No se encontraron coordenadas almacenadas.');
  }
//////////////////////////////////
      this.loadData();
      }



  loadData() {
    this.loadDataService.getPhotos().subscribe(
      (res:Photo[]) => {
        res.filter((item) => {
          if (item.title == this.currentId) {
            this.data = item;
            console.log(this.data)
           this.dato = Object.values(this.data); 
             console.log(this.dato)
             this.rawImagePath = this.dato[6]; // "uploads\\19ae6e74-d3f1-48f0-a576-a8e966500c58.jpg"
             this.imagePaths = item.imagePaths.map((path: string) =>
                        `http://localhost:4000/${path.replace(/\\/g, '/')}`
                                                         );

             this.fullUrl = `http://localhost:4000/${this.imagePaths}`;
              this.imageUrl = `http://localhost:4000/${this.dato[6].replace(/\\/g, '/')}`;

this.albums = this.imagePaths.map((path: string) => ({
  src: path,
  thumb: path,
  caption: 'Imagen del inmueble',
}));

console.log('Albums construidos correctamente:', this.albums);

         }
        });
      }, 
      (err) => console.log(err)
    );
  }

  
  open(index: number): void {
    this.lightbox.open(this.imagePaths, index);
  }

  close(): void {
    this.lightbox.close();
  }






}