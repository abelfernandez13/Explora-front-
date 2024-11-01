import { Options } from '@angular-slider/ngx-slider';
import { Injectable } from '@angular/core';
// import { tarjetas } from 'src/app/data/datos';
// import { Cards } from 'src/app/model/cards';

@Injectable({
  providedIn: 'root'
})

    export class CardService    {

  minValue: number = 100000;
  maxValue: number = 200000;
  options: Options = {
    floor: 80000,
    ceil: 250000
  }; 

  searchTerm:string='';

  // lista:Cards[]=[];
  // listaTarjetas:Cards[]=[];

  
  constructor() {
    
    // this.lista=tarjetas
    // this.listaTarjetas=tarjetas

   }

  //  verIdpar():void{
  //   this.listaTarjetas = this.lista.filter(t=>{t.precios >= this.minValue && t.precios <= this.maxValue
                                          
  //     })
  //      }
}
