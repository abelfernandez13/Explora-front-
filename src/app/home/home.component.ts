import { Component, OnInit,NO_ERRORS_SCHEMA } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { SearchComponent } from '../search/search.component';
import { Pipe,PipeTransform } from '@angular/core';
// import { CardFilterPipe } from "../pipes/card-filter.pipe";
import { LabelType, NgxSliderModule, Options, SliderComponent } from '@angular-slider/ngx-slider';

// import { tarjetas } from '../data/datos';
// import { Cards } from '../model/cards';
import { CardService } from '../shared/services/card.service';
 import { Lugar } from '../data/lugares';
import { Lugares } from "../model/lugares";
import { CardcontacComponent } from "../cardcontac/cardcontac.component";
import { Photo } from '../interface/Photo';
import { LoadPropertysService } from "../shared/services/load-propertys.service";
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from "../login/login.component";
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { SlideComponent } from '../slide/slide.component';
import { AddUserComponent } from "../add-user/add-user.component";
import { PropertiesComponent } from "../properties/properties.component";
import { CardDetailsComponent } from '../card-details/card-details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone:true,
  styleUrls: ['./home.component.scss'],
  imports: [MatToolbarModule, MatCardModule, MatIconModule, CommonModule, LoginComponent, SlideComponent, AddUserComponent, RouterModule, PropertiesComponent,CardDetailsComponent],
  schemas: [NO_ERRORS_SCHEMA], // Not recommended unless necessary
  providers: [ LoginComponent,SliderComponent  ]
 
 
})

export class HomeComponent implements OnInit {
  count: number = 0; // Adultos
  count1: number = 0; // Adultos
  count2: number = 0; // Niños
  count3: number = 0; // Niños
  count4: number = 0;
  count5: number = 0;
  count6:number;
  count7:number;
  active: boolean;
  active1: boolean;
  photos: Photo[] = [];
  // lista:Cards[]=[];
  // listaTarjetas:Cards[]=[];
  lugares:Lugares[] = [];
  currentIndex: number = 0;
  private currentId: string;
  
rawImagePath:any;
  data: Photo;
  dato:any;
  imageUrl:any;
  fullUrl:any;

  title: string 
  description: string 
imagePaths: string[] = [];
  t: Photo[] = []; // si necesitas los datos de los inmuebles


  panelOpenState = false;
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

/////// Adultos
  clickCount(): void {
      this.count--;
      this.count2 = this.count - this.count1;
      if( this.count2<=0  && this.count2 === 0 ) {
        this.active = true;
      }else{
      this.active = false;
      }
   }

   clickCount1(): void {

    if( this.count2<=0  && this.count2===0 ) {
      this.active = false;
    }else{
    this.active = false;
    }
    this.count++ ;
    this.count2 = this.count + this.count1;

    }
///// Niños

clickCount3(): void {

  if( this.count3<=0  && this.count3===0 ) {
    this.active1 = false;
  }else{
  this.active1 = false;
  }
  this.count4++ ;
  this.count3 = this.count4 + this.count5;
  }

  clickCount2(): void {
    this.count4--;
    this.count3 = this.count4 - this.count5;
    if(this.count3<=0  && this.count3===0) {

      this.active1 = true;
     }else{
    this.active1 = false;
     }
     }
   colorTheme = 'theme-dark-blue';
    datePickerConfig:Partial<BsDatepickerConfig>;


    /////////////////////////filters////////////////

   
    constructor(public CardService:CardService,private loadDataService:LoadPropertysService,
      private router: Router  ){

      // this.lista=tarjetas
      // this.listaTarjetas=tarjetas
      this.lugares = Lugar

      // console.log(this.listaTarjetas)

     
      this.datePickerConfig = Object.assign({},
        {
          containerClass: 'theme-dark-blue',
          showWeekNumbers: false,
          // minDate: 0, // 0 days offset = today
          // maxDate: 'today',
          dateInputFormat: 'DD/MM/YYYY'
        });
    }
 
    minValue: number = 80000;
    maxValue: number = 300000;
    options: Options = {
      floor: 80000,
      ceil: 300000,
      translate: (value: number, label: LabelType): string => {
        switch (label) {
          case LabelType.Low:
            return "$" + value + "COP";
          case LabelType.High:
            return "$" + value + "COP"; 
          default:
            return "$" + value + "COP" ;
        }
      }
   };

  ngOnInit() { 

    CardcontacComponent;

    this.loadDataService.getPhotos()
    .subscribe(
      res => {
        this.photos = res;
        console.log(this.photos);
      },
    ) 


  this.loadDataService.getPhotos().subscribe(
      (res:Photo[]) => {
        res.filter((item) => {
          if (item.title == this.currentId) {
            this.data = item;
            console.log(this.data)
           this.dato = Object.values(this.data); 
             console.log(this.dato)
             this.rawImagePath = this.dato[6]; // "uploads\\19ae6e74-d3f1-48f0-a576-a8e966500c58.jpg"
             this.imagePaths = item.imagePaths.map((path: string) =>
                        `http://localhost:4000/${path.replace(/\\/g, '/')}`
                                                         );

             this.fullUrl = `http://localhost:4000/${this.imagePaths}`;
              this.imageUrl = `http://localhost:4000/${this.dato[6].replace(/\\/g, '/')}`;
         }
        });
      }, 
      (err) => console.log(err)
    ); 
  }
  

selectedCard(id: string) {
  this.router.navigate(['/photos', id]);
}

     }



