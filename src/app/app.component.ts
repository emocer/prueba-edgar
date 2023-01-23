import { Component, OnInit } from '@angular/core';
import { Amortizacion } from './interfaces/Amortizacion';
import { CalculoAmortizacionService } from 'src/app/services/calculo-amortizacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    

  tablaAmortizacion: Amortizacion[] = [];
  

  
  constructor(private _amortizaciones: CalculoAmortizacionService) {}

  ngOnInit(): void {
    this. tablaAmortizacion = this._amortizaciones.calculoAmortizaciones(60000,2,10,12);
  }
}
