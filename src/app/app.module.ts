import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { DemoMaterialModule } from './material-module';
import { SlideComponent } from './slide/slide.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MastercardsComponent } from './mastercards/mastercards.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CasafarolesComponent } from './casafaroles/casafaroles.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import {MatListModule} from '@angular/material/list';
import { SwiperModule } from 'swiper/angular';
import { AlertModule,AlertConfig } from 'ngx-bootstrap/alert';
// import { CardFilterPipe } from "./pipes/card-filter.pipe";

/* Custom Hammer configuration */
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';
import { AptoVillamonicaComponent } from './casaB-201/apto-villamonica.component';
import { CasablancaComponent } from './casaB-202/casablanca.component';
import { CAyapelComponent   } from './c-ayapel/c-ayapel.component';
import { CasaSanjoseComponent } from './casa-sanjose/casa-sanjose.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardcontacComponent } from './cardcontac/cardcontac.component';
import { SwiperComponent } from './swiper/swiper.component';
import { Swipper1Component } from './swipper1/swipper1.component';
import { Swipper2Component } from './swipper2/swipper2.component';
import { SwipperCsjComponent } from './swipper-csj/swipper-csj.component';
import { SwipperSanjComponent } from './swipper-sanj/swipper-sanj.component';
import { TorresVillamonicaComponent } from './torres-villamonica/torres-villamonica.component';
import { SwipperTComponent } from './swipper-t/swipper-t.component';
import { SwipperCsarahComponent } from './swipper-csarah/swipper-csarah.component';
import { CasaSarahComponent } from './casa-sarah/casa-sarah.component';
import { SwiperpruebaComponent } from './swiperprueba/swiperprueba.component';
import { SwipperCayapelComponent } from './swipper-cayapel/swipper-cayapel.component';
import { AptoVillaCarmenComponent } from './apto-villa-carmen/apto-villa-carmen.component';
import { SwipperAptoVillaCarmenComponent } from './swipper-apto-villa-carmen/swipper-apto-villa-carmen.component';

import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { CardsComponent } from '../cards/cards.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UploadPageComponent } from './upload-page/upload-page.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { CardDetailsComponent } from './card-details/card-details.component';

@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    SlideComponent,
    MastercardsComponent,
    SearchComponent,
    CasafarolesComponent,
    AptoVillamonicaComponent,
    CasablancaComponent,
    CasaSanjoseComponent,
    CardcontacComponent,
    SwiperComponent,
    Swipper1Component,
    Swipper2Component,
    SwipperCsjComponent,
    SwipperSanjComponent,
    TorresVillamonicaComponent,
    SwipperTComponent,
    SwipperCsarahComponent,
    CasaSarahComponent,
    SwiperpruebaComponent,
    SwipperCayapelComponent,
    CAyapelComponent,
    AptoVillaCarmenComponent,
    SwipperAptoVillaCarmenComponent,
    // CardFilterPipe,
    CardcontacComponent,
    CardsComponent,
    UserComponent,
    AddUserComponent,
    UploadPageComponent,
    CardDetailsComponent,
  
  ],
  imports: [
    BrowserModule,
    NgxSliderModule,
    AppRoutingModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    DemoMaterialModule,
    NgbModule,
    MatDatepickerModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgxGalleryModule,
    FlexLayoutModule,
    MatExpansionModule,
    SwiperModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,

    BsDatepickerModule.forRoot(),
    ],
    providers: [AlertConfig, BsDatepickerConfig],
    bootstrap: [AppComponent]
})
export class AppModule { }
