import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { User } from '../interface/user'
import Swal from 'sweetalert2';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
   standalone: true,
  styleUrls: ['./login.component.scss'],

   imports: [ButtonModule,DialogModule,ReactiveFormsModule,AvatarModule,RouterModule  ]
  

  
})
export class LoginComponent implements OnInit  {
   
  visible: boolean = false;
  phoneNumber: string = '';
  verificationCode: string = '';
  verificationCodeInputVisible: boolean = false;

  showDialog() {
      this.visible = true;
  }
  constructor(private loginService:AuthService,private router: Router) { }

    ngOnInit() {
   
    }
    
  form = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
    
    })
    
    onsubmit(){
    
    if(this.form.valid) {
    
      this.loginService.logIn(this.form.value as User) 
      .then((res) => {
      console.log("aca estoy")
        this.router.navigate(['/dashboard']); 
    
         console.log(res)
    
      }) 
    }
     }
  
    sendLoginCode() {
      this.loginService.sendLoginCode(this.phoneNumber)
        .then(() => {
          this.verificationCodeInputVisible = true;
        })
        .catch(error => {
          console.error('Error sending login code', error);
        });
    }
  
    verifyLoginCode() {
      this.loginService.verifyLoginCode(this.verificationCode)
        .then(() => {
          // Successful verification logic here
        })
        .catch(error => {
          console.error('Error verifying code', error);
        });
    }


     onClickgoogle(){

  this.loginService.logInGoogle()
  .then((res) => {

    this.router.navigate(['/dashboard']);
    console.log(res);

  })


}





}
