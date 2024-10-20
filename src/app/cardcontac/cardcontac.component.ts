import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Options, LabelType } from '@angular-slider/ngx-slider';
import { Lugares } from '../model/lugares';
// import { Cards } from '../model/cards';
// import { tarjetas } from '../data/datos';
import { CardService } from '../shared/services/card.service';
import { Lugar } from '../data/lugares';
@Component({
  selector: 'app-cardcontac',
  templateUrl: './cardcontac.component.html',
  styleUrls: ['./cardcontac.component.scss']
})
export class CardcontacComponent implements OnInit {

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
            return "<b >Min:</b> $" + value + "COP";
          case LabelType.High:
            return "<b>Max:</b> $" + value + "COP";
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

    ngOnInit() {
      // this.lista=tarjetas
      // this.listaTarjetas=tarjetas
      
      }
  }
