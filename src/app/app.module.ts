import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SlideComponent } from './slide/slide.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatExpansionModule} from '@angular/material/expansion';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule} from '@angular/forms';
// import { CasafarolesComponent } from './casafaroles/casafaroles.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { MatListModule } from '@angular/material/list';
import { SidebarModule } from 'primeng/sidebar';
import { FloatLabelModule } from 'primeng/floatlabel';
import { AlertModule,AlertConfig } from 'ngx-bootstrap/alert';
// import { CardFilterPipe } from "./pipes/card-filter.pipe";
import { DialogModule } from 'primeng/dialog';

// swiper
import { SwiperSlide } from 'swiper/element';

import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { StepperModule } from 'primeng/stepper';
// Importaciones necesarias de Firebase y AngularFire
import { provideFirebaseApp, initializeApp, firebaseApp$ } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth'; // Si usas Auth
import { provideFirestore, getFirestore } from '@angular/fire/firestore'; // Si usas Firestore
import { provideStorage, getStorage } from '@angular/fire/storage'; // Si usas Storage

///////
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';


/* Custom Hammer configuration */
import { HammerGestureConfig } from '@angular/platform-browser';
import * as Hammer from 'hammerjs'; 
import { LoginComponent } from "./login/login.component";
// import { AptoVillamonicaComponent } from './casaB-201/apto-villamonica.component';
// import { CasablancaComponent } from './casaB-202/casablanca.component';
// import { CAyapelComponent   } from './c-ayapel/c-ayapel.component';
// import { CasaSanjoseComponent } from './casa-sanjose/casa-sanjose.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardcontacComponent } from './cardcontac/cardcontac.component';
// import { SwiperComponent } from './swiper/swiper.component';
// import { Swipper1Component } from './swipper1/swipper1.component';
// import { Swipper2Component } from './swipper2/swipper2.component';
// import { SwipperCsjComponent } from './swipper-csj/swipper-csj.component';
import { SwipperSanjComponent } from './swipper-sanj/swipper-sanj.component';
// import { TorresVillamonicaComponent } from './torres-villamonica/torres-villamonica.component';

// import { SwipperCsarahComponent } from './swipper-csarah/swipper-csarah.component';
// import { CasaSarahComponent } from './casa-sarah/casa-sarah.component';
// import { SwiperpruebaComponent } from './swiperprueba/swiperprueba.component';
// import { SwipperCayapelComponent } from './swipper-cayapel/swipper-cayapel.component';
// import { AptoVillaCarmenComponent } from './apto-villa-carmen/apto-villa-carmen.component';
// import { SwipperAptoVillaCarmenComponent } from './swipper-apto-villa-carmen/swipper-apto-villa-carmen.component';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { ButtonModule } from 'primeng/button';

import { CardsComponent } from '../cards/cards.component';

import { UploadPageComponent } from './upload-page/upload-page.component';
import { MatIconModule } from '@angular/material/icon';  // Importar MatIconModule

// import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import { MatFormFieldModule } from '@angular/material/form-field';  // Reemplazar legacy-form-field

// import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {MatStepperModule} from '@angular/material/stepper';
// import { CardDetailsComponent } from './card-details/card-details.component';
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
// import { ModoAnfitrionComponent } from './modo-anfitrion/modo-anfitrion.component';
import { MatButtonModule } from '@angular/material/button';
// import { DemoMaterialModule } from './material-module'; // Ajusta la ruta según corresponda
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { StyleClassModule } from 'primeng/styleclass';


import { FileUploadModule } from 'primeng/fileupload';


import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuardsComponent } from './guards/guards.component'; 


import firebase from 'firebase/compat/app';
// import { SwipperTComponent } from './swiper/swipper-t/swipper-t.component';

import { HomeComponent } from './home/home.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

firebase.initializeApp(environment.firebaseConfig);




import { CardDetailsComponent } from './card-details/card-details.component';
import { environment } from 'src/environments/environment';
import { PropertiesComponent } from "./properties/properties.component";

@NgModule({
  declarations: [

    AppComponent,
   
    SearchComponent,
    // CasafarolesComponent,
    // AptoVillamonicaComponent,
    // CasablancaComponent,
    // CasaSanjoseComponent,
    CardcontacComponent,
    // SwiperComponent,
    // Swipper1Component,
    // Swipper2Component,
    // SwipperCsjComponent,
    SwipperSanjComponent,

    // TorresVillamonicaComponent,
    // SwipperTComponent,

    // CasaSarahComponent,
    // SwiperpruebaComponent,
    // SwipperCayapelComponent,
    // CAyapelComponent,
    // AptoVillaCarmenComponent,
    // SwipperAptoVillaCarmenComponent,
    // CardFilterPipe,
    CardcontacComponent,
  
    
    UploadPageComponent,




    GuardsComponent,

  
  ],

  imports: [
    NgxSliderModule,
    FileUploadModule,
    AddUserComponent,
    SlideComponent,
    LoginComponent,
    MatCardModule,
    MatCardModule,
    AppRoutingModule,
    MatListModule,
    SidebarModule,
    StyleClassModule,
    MatToolbarModule,
    NgbModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    NgxGalleryModule,
    MatExpansionModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    AvatarModule,
    BsDatepickerModule.forRoot(),
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    PropertiesComponent
],
    providers: [
      // provideFirebaseApp(() => initializeApp(environment.firebase)),
      // provideAuth(() => getAuth()),
      // provideFirestore(() => getFirestore()),
      // provideStorage(() => getStorage())
    ],
    bootstrap: [AppComponent],

})
export class AppModule { }
