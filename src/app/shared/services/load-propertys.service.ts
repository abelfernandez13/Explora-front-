import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from 'src/app/interface/Photo';

@Injectable({
  providedIn: 'root'
})
export class LoadPropertysService {

URL ='http://localhost:4000/api/photos';

  constructor(private http:HttpClient){}
     createPhoto(title: string, description: string,precio:string,habitaciones:string,huespedes: string, photo: File) {
      const fd = new FormData();
      fd.append('title', title);
      fd.append('description', description);
      fd.append('image', photo);
      fd.append('precio',precio);
      fd.append('huespedes', huespedes);
      fd.append('habitaciones', habitaciones);
      // fd.append('ubicacion', ubicacion);
          
      return this.http.post(this.URL, fd);
    
    }
  
    getPhotos() {
      return this.http.get<Photo[]>(this.URL);
    }


    // getPhotosfind(){

    //   return this.http.get<Photo[]>(this.URL).

    // }
  
    getPhoto(id: string) {
      return this.http.get<Photo>(`${this.URL}/${id}`);
    }
  
    deletePhoto(id: string) {
      return this.http.delete(`${this.URL}/${id}`);
    }
  
    updatePhoto(id: string, title: string, description: string) {
      return this.http.put(`${this.URL}/${id}`, {title, description});
    }

}