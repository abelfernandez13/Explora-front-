import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../interface/user'
import Swal from 'sweetalert2'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

constructor(private loginService:AuthService,private router: Router){  }

form = new FormGroup({
email: new FormControl("", Validators.required),
password: new FormControl("", Validators.required)

})

onsubmit(){

if(this.form.valid) {

  this.loginService.register(this.form.value as User) 
  .then((res) => {
  console.log("aca estoy")
    this.router.navigate(['/home']) 
    Swal.fire({
      title: "Registro exitoso!",
      icon: "success"
    });
     console.log(res)

  }) 
}
 }
 visible: boolean = false;

 showDialog() {
     this.visible = true;
 }

 ngOnInit(): void {
   this.showDialog()
 }
}