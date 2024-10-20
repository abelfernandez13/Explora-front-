import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Options, LabelType } from '@angular-slider/ngx-slider';
// import { Cards } from 'src/app/model/cards';
import { Lugares } from '../app/model/lugares';
import { CardService } from 'src/app/shared/services/card.service';
// import { tarjetas } from 'src/app/data/datos';
// import { lugar } from 'src/app/data/lugares';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  bsValue = new Date();
  fechaInitiale: Date[];
  bsRangeValue : Date[];
  maxDate = new Date();
  minDate = new Date();
  count: number = 0; // Adultos
  count1: number = 0; // Adultos
  count2: number = 0; // Niños
  count3: number = 0; // Niños
  count4: number = 0;
  count5: number = 0;
  active: boolean;
  active1: boolean;
  valor:Date[];
  valordif:number;
  fechaInitial:Date[];
  fechaEnd:number[]
  counter = 1;
  dates:number[];
  primero:number;
  segundo:number;
  fechaDif:number;
  resolv:number;
  precios:number= 80000;
  minValue: number = 100;
  maxValue: number = 400;
  inputValue: string;
  showPlaceholder: boolean = true;

  // lista:Cards[]=[];
  // listaTarjetas:Cards[]=[];
  lugares:Lugares[]=[];

  OnChangeValue(){

    this.counter = this.counter + 1;

  if(this.counter > 0 ){
   this.fechaInitial = this.bsRangeValue;

  this.dates = this.fechaInitial.map(date => new Date(date).getDate())

  this.primero = this.dates[0]
  this.segundo = this.dates[1]

  this.fechaDif = this.segundo - this.primero

 this.resolv = this.precios * this.fechaDif

}

  console.log(this.resolv)

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

    console.log(this.count2)

    }
///// Niños

clickCount3(): void {

  if( this.count3<=0  && this.count3 === 0 ) {
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


    console.log(this.count3)
    }
  
    onBlur() {

      if (this.showPlaceholder ) {
        this.showPlaceholder
      }else{
        this.resolv;
      }
    }

      
  // verIdpar():void{
  //   this.listaTarjetas = this.lista.filter(t=>t.precios >= this.minValue && t.precios <= this.maxValue
  //                                               )

  //   console.log(this.listaTarjetas)
  //       }

    options: Options = {
      floor: 80000,
      ceil: 300000,
      translate: (value: number, label: LabelType): string => {
        switch (label) {
          case LabelType.Low:
            return "<b>Minimo:</b> $" + value;
          case LabelType.High:
            return "<b>Maximo:</b> $" + value;
          default:
            return "$" + value;
        }
      }
   };


    colorTheme = 'theme-dark-blue';
    datePickerConfig:Partial<BsDatepickerConfig>;



    constructor(public CardService:CardService) {

      // this.lista=tarjetas
      // this.listaTarjetas=tarjetas
      this.lugares = this.lugares

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

    ngOnInit() {
      // this.lista=tarjetas
      // this.listaTarjetas=tarjetas
      
      }
  }
