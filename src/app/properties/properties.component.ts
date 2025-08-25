
import { Component } from '@angular/core';
import { MessageService, PrimeNGConfig} from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { HttpClientModule } from '@angular/common/http';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule, MapGeocoder,MapGeocoderResponse } from '@angular/google-maps';

@Component({
  selector: 'app-properties',
    standalone: true,
    imports: [FileUploadModule, ButtonModule, BadgeModule, ProgressBarModule, ToastModule, HttpClientModule, CommonModule, FormsModule,GoogleMapsModule ],
    providers: [MessageService],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss'
})
export class PropertiesComponent {

  direccion: string = '';
  lat: number | null = null;
  lng: number | null = null;

   buscarUbicacion() {
    if (!this.direccion) {
      console.error('Debes escribir una dirección.');
      return;
    }

    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: this.direccion }, (results, status) => {
      if (status === 'OK' && results[0]) {
        this.lat = results[0].geometry.location.lat();
        this.lng = results[0].geometry.location.lng();
        console.log('Coordenadas:', this.lat, this.lng);
      } else {
        console.error('No se pudo geocodificar:', status);
      }
    });
  }


}