import { Component, OnInit,NgModule, inject } from '@angular/core';
import { LoadPropertysService } from '../shared/services/load-propertys.service';
import { Router } from '@angular/router';
import {UntypedFormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
<<<<<<< HEAD
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
=======
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormGroup, FormControl } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';

>>>>>>> fe5eb72d (Actualizacion a angular 17)



interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
@Component({
  selector: 'app-add- user',
  templateUrl: './add-user.component.html',
<<<<<<< HEAD
  standalone:true,
  styleUrls: ['./add-user.component.scss'],
  imports: [MatStepperModule,MatFormFieldModule,ReactiveFormsModule]
=======
  standalone: true,
  styleUrls: ['./add-user.component.scss'],
  imports: [StepperModule, ButtonModule,FloatLabelModule,ReactiveFormsModule,MatStepperModule,MatFormFieldModule]

>>>>>>> fe5eb72d (Actualizacion a angular 17)
 
})
export class AddUserComponent  { 

currentIndex: number = 0;
currentItem: any;
data: any;


  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  photoSelected: string | ArrayBuffer;
  file: File;
  title: string = '';
  description: string = '';

<<<<<<< HEAD
  constructor(private load:LoadPropertysService,private router: Router,private _formBuilder: UntypedFormBuilder) { }
=======


  constructor(private load:LoadPropertysService,private router: Router,private _formBuilder: FormBuilder) { }
>>>>>>> fe5eb72d (Actualizacion a angular 17)

  enviarFormulario(title:string, description:string) {

        // Redirige a la página secundaria y pasa los datos como parámetros de ruta
        this.router.navigate(['/casa-sanjose']);

  }

  
  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

uploadPhoto(title: HTMLInputElement, description: HTMLTextAreaElement,precio:HTMLInputElement,habitaciones:HTMLInputElement,huespedes:HTMLInputElement){
    this.load
      .createPhoto(title.value, description.value,precio.value,habitaciones.value,huespedes.value,this.file)
      .subscribe(
        res => {
          console.log(res);
             this.router.navigate(['/photos']);
          
        },
        err => console.log(err)
      );
  }

enviarDatos(title: HTMLInputElement, description: HTMLTextAreaElement,precio:HTMLInputElement,habitaciones:HTMLInputElement,huespedes:HTMLInputElement) {

console.log('datos envi');
  this.load.createPhoto(title.value, description.value,precio.value,habitaciones.value,huespedes.value,this.file)
           .subscribe(data => {
            console.log('see envian los datos enviados')
            // Muestra el elemento actual
            this.currentItem = this.data[this.currentIndex];
          
            // Incrementa el índice para el siguiente elemento de manera incremental
            this.currentIndex++;
          
            // Verifica si alcanzó el final de la lista
            if (this.currentIndex >= this.data.length) {
              // Reinicia el índice al comienzo si ha llegado final
              this.currentIndex = 0;
            }
               this.router.navigate(['/casa-sanjose'])


})}

 
  ngOnInit(){



  }

}