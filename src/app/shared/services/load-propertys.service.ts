import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/interface/Photo';

@Injectable({
  providedIn: 'root'
})


export class LoadPropertysService {

files:any;
URL ='http://localhost:4000/api/photos';

  constructor(private http:HttpClient){}

  

createPhoto(formData: FormData): Observable<Object> {
  return this.http.post('http://localhost:4000/api/photos', formData);
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