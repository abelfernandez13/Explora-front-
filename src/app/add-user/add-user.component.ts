import { Component, OnInit,NgModule, inject } from '@angular/core';
import { LoadPropertysService } from '../shared/services/load-propertys.service';
import { ActivatedRoute, Router } from '@angular/router';
import {UntypedFormBuilder, Validators, FormsModule, ReactiveFormsModule, FormBuilder, SelectControlValueAccessor, FormControlName} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormGroup, FormControl } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { MatStepperModule } from '@angular/material/stepper';
import { matFormFieldAnimations, MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { PropertiesComponent } from "../properties/properties.component";
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


// Componet upload
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { FileUpload, FileUploadModule } from 'primeng/fileupload';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProgressBar } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { UploadImagesComponent } from '../upload-images/upload-images.component';
import { GoogleMapsModule, MapGeocoder,MapGeocoderResponse } from '@angular/google-maps';
import { LocationService } from '../shared/services/location.service';




interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule,UploadImagesComponent, FileUploadModule, ToastModule,BadgeModule,MatButtonModule,MatFormFieldModule,ReactiveFormsModule,ButtonModule,MatInputModule,MatStepperModule, HttpClientModule,GoogleMapsModule,FormsModule  ],
  providers: [MessageService,ProgressBar,FileUpload,PropertiesComponent,MapGeocoder],
    
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {

  files :any =[];
index:any
totalSize : number = 0;
 totalSizePercent : number = 0;
currentIndex: number = 0;
currentItem: any;
data:any;
isLinear = false;
 photoSelected: string | ArrayBuffer;
  file: File;
  title: string = '';
  description: string = '';
  precio: number;
  huespedes:number;
  habitaciones:number;
  imagePath:string;
 direccion: string = '';
  lat: number | null = null;
  lng: number | null = null;
  zoom = 15;

buscarUbicacion() {
  if (!this.direccion) {
    console.error('Debes escribir una dirección.');
    return;
  }

  const geocoder = new google.maps.Geocoder();

  geocoder.geocode({ address: this.direccion }, (results, status) => {
    if (status === 'OK' && results && results[0]) {
      this.lat = results[0].geometry.location.lat();
      this.lng = results[0].geometry.location.lng();

   this.locationService.setCoords(this.lat, this.lng,this.direccion);

      console.log('Coordenadas:', this.lat, this.lng);
    } else {
      console.error('No se pudo geocodificar:', status);
    }
  });
}

  private currentId: string;
 coordenadas:any

 firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  threeFormGroup = this._formBuilder.group({
    threeCtrl: ['', Validators.required],
  });

  constructor(private load:LoadPropertysService,
              private router: Router,
              private _formBuilder: FormBuilder,
              private config: PrimeNGConfig,
              private messageService: MessageService,
              private http: HttpClient,
                  private route: ActivatedRoute,
              private locationService: LocationService
              
            
            ) { 
                   this.currentId = this.route.snapshot.params.id;
              }

  ngOnInit(){

  }

// buscarUbicacion() {
//   if (!this.direccion) return;

//   const apiKey = 'AIzaSyApXY0Xk_vWavMY-zEhPmfBpCAYkBbxDCI';
//   const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(this.direccion)}&key=${apiKey}`;

//   this.http.get<any>(url).subscribe((res) => {
//     if (res.status === 'OK') {
//       const location = res.results[0].geometry.location;
//       this.lat = location.lat;
//       this.lng = location.lng;

//       // Guarda coordenadas y dirección en el servicio
//       this.locationService.setCoords(this.lat, this.lng, this.direccion);

//       // Navega sin queryParams
//       this.router.navigate(['/c:id' ]); // ajusta `this.formId` a tu lógica
//     } else {
//       alert('No se pudo encontrar la ubicación ingresada');
//     }
//   });
// }




    choose(event, callback) {
        callback();
    }

    onRemoveTemplatingFile(event, file, removeFileCallback, index) {
        removeFileCallback(event, index);
        this.totalSize -= parseInt(this.formatSize(file.size));
        this.totalSizePercent = this.totalSize / 10;
    }

    onClearTemplatingUpload(clear) {
        clear();
        this.totalSize = 0;
        this.totalSizePercent = 0;
    }

    onTemplatedUpload() {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
    }

  onSelectedFiles(event): void {
  
    this.files = event.currentFiles;
    this.totalSize = 0;

    this.files.forEach((file) => {
        this.totalSize += file.size;
    });

    // Suponiendo que 10MB es el máximo permitido
    this.totalSizePercent = this.totalSize / (10 * 1024 * 1024); 
}


    uploadEvent(callback) {
        callback();
    }

    formatSize(bytes) {
        const k = 1024;
        const dm = 3;
        const sizes = this.config.translation.fileSizeTypes;
        if (bytes === 0) {
            return `0 ${sizes[0]}`;
        }

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

        return `${formattedSize} ${sizes[i]}`;
    }


enviarDatos(
  title: HTMLInputElement,
  description: HTMLTextAreaElement,
  precio: HTMLInputElement,
  habitaciones: HTMLInputElement,
  huespedes: HTMLInputElement,
  ubicacion: HTMLInputElement,
  // lat: HTMLInputElement,
  // lng: HTMLInputElement
  
) {
  const formData = new FormData();

  formData.append('title', title.value);
  formData.append('description', description.value);
  formData.append('precio', precio.value);
  formData.append('habitaciones', habitaciones.value);
  formData.append('huespedes', huespedes.value); 
  formData.append('ubicacion', ubicacion.value);
// Agrega coordenadas
// formData.append('lat', lat?.toString() || '');
// formData.append('lng', lng?.toString() || '');


  // Usa `this.files` si seleccionaste múltiples imágenes con <input type="file" multiple />
  for (let i = 0; i < this.files.length; i++) {
    formData.append('images', this.files[i]); // 'images' debe coincidir con multer.array('images')
  }

  this.load.createPhoto(formData).subscribe(
    (data) => {
      console.log('Datos enviados correctamente:', data);
     this.router.navigate(['/c/:id']);
      
    },
    (error) => {
      console.error('Error al enviar los datos:', error);
    }
  );
}
}
