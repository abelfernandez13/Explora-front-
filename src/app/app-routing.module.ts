import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { CasafarolesComponent } from './casafaroles/casafaroles.component';
import { AptoVillamonicaComponent } from './casaB-201/apto-villamonica.component';
import { CasaSanjoseComponent } from './casa-sanjose/casa-sanjose.component';
import { CAyapelComponent  } from './c-ayapel/c-ayapel.component';
import { CasablancaComponent } from './casaB-202/casablanca.component';
import { TorresVillamonicaComponent } from './torres-villamonica/torres-villamonica.component';
import { CasaSarahComponent } from './casa-sarah/casa-sarah.component';
import { AptoVillaCarmenComponent } from './apto-villa-carmen/apto-villa-carmen.component';
import { CardDetailsComponent } from './card-details/card-details.component';
=======
// import { CasafarolesComponent } from './casafaroles/casafaroles.component';
// import { AptoVillamonicaComponent } from './casaB-201/apto-villamonica.component';
// import { CasaSanjoseComponent } from './casa-sanjose/casa-sanjose.component';
// import { CAyapelComponent  } from './c-ayapel/c-ayapel.component';
// import { CasablancaComponent } from './casaB-202/casablanca.component';
// import { TorresVillamonicaComponent } from './torres-villamonica/torres-villamonica.component';
// import { CasaSarahComponent } from './casa-sarah/casa-sarah.component';
// import { AptoVillaCarmenComponent } from './apto-villa-carmen/apto-villa-carmen.component';
// import { CardDetailsComponent } from './card-details/card-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
>>>>>>> fe5eb72d (Actualizacion a angular 17)


const routes: Routes = [{

path: '',
redirectTo: 'home',
pathMatch: 'full'

},

{
path: 'home',
component: HomeComponent
  },
<<<<<<< HEAD
{
  path: "c/:id",
  component: CardDetailsComponent,
=======
// {
//   path: "c/:id",
//   component: CardDetailsComponent,
// },
{
  path: "register",
  component: RegisterComponent,
>>>>>>> fe5eb72d (Actualizacion a angular 17)
},
{
  path: "login",
  component: LoginComponent,
},
{
  path: "dashboard",
  component: DashboardComponent,
},
// {
//   path: 'casafaroles',
//   component: CasafarolesComponent
// },
// {
//   path: 'casaB-201',
//   component: AptoVillamonicaComponent
// },
// {
//   path: 'casaB-202',
//   component: CasablancaComponent
// },
// {
//   path: 'apto-villamonica',
//   component: AptoVillamonicaComponent

// },
// {
//   path: 'casa-sanjose',
//   component: CasaSanjoseComponent
// },
// {
//   path: 'casa-sanjose/:id',
//   component: CasaSanjoseComponent
// },
// {
//   path: 'c-ayapel',
//   component:  CAyapelComponent
// },

// {
//   path: 'casablanca',
//   component: CasablancaComponent

// },
// {
//   path: 'torres-villamonica',
//   component: TorresVillamonicaComponent

// },
// {
//   path: 'casa-sarah',
//   component: CasaSarahComponent


// },
// {
//   path: 'apto-villa-carmen',
//   component: AptoVillaCarmenComponent


// }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
