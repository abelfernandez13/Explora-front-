import { Component, OnInit } from '@angular/core';
import { LoadPropertysService } from '../shared/services/load-propertys.service';


@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss']
})
export class UploadPageComponent implements OnInit {

public archivo:any=[];


  constructor(private load:LoadPropertysService) { }

  selectedFile: File | null = null;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.archivo.push(this.selectedFile); 

  }


  uploadFile(): void {
    if (this.selectedFile) {
      // Aquí puedes enviar el archivo al servidor o realizar otras operaciones
      console.log('Archivo seleccionado:', this.selectedFile);
    } else {
      console.log('Ningún archivo seleccionado.');
    }
  }

   ngOnInit(): void {
  }

}
