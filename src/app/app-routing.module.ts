import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { CardDetailsComponent } from './card-details/card-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UploadImagesComponent } from './upload-images/upload-images.component';
import { PropertiesComponent } from './properties/properties.component';




const routes: Routes = [{

path: '',
redirectTo: 'home',
pathMatch: 'full'

},

{
path: 'home',
component: HomeComponent
  },
{
  path: "register",
  component: RegisterComponent,
},
{
  path: "upload-images",
  component: UploadImagesComponent,
},
{
  path: "login",
  component: LoginComponent,
},


{
  path: "dashboard",
  component: DashboardComponent,
},
{
  path: "add-user",
  component: AddUserComponent,
},

{
  path: "properties",
  component: PropertiesComponent,
},

{path: "c/:id",
  component: CardDetailsComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
