import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private lat: number | null = null;
  private lng: number | null = null;
  private direccion: string = '';

  constructor() {
    const stored = localStorage.getItem('ubicacion');
    if (stored) {
      const data = JSON.parse(stored);
      this.lat = data.lat;
      this.lng = data.lng;
      this.direccion = data.direccion;
    }
  }

  setCoords(lat: number, lng: number, direccion: string) {
    this.lat = lat;
    this.lng = lng;
    this.direccion = direccion;
    localStorage.setItem(
      'ubicacion',
      JSON.stringify({ lat, lng, direccion })
    );
  }

  getCoords() {
    return { lat: this.lat, lng: this.lng, direccion: this.direccion };
  }

  clearCoords() {
    this.lat = null;
    this.lng = null;
    this.direccion = '';
    localStorage.removeItem('ubicacion');
  }
}
