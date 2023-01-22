import { Injectable } from '@angular/core';
import { Amortizacion } from '../interfaces/Amortizacion';
import { CalculadorCuotaAmortizacion } from '../helpers/calculador-cuota-amortizacion.helper';
import { PeriodoAmortizacion } from '../interfaces/Periodo';


@Injectable({
  providedIn: 'root'
})
export class CalculoAmortizacionService {
  

  public calculoAmortizaciones(capital: number, interes: number, años: number, cuotasAnuales: number): Amortizacion[] {

    let amortizaciones: Amortizacion[] = [];
    let capitalAmortizado: number = 0;
    let capitalPendiente: number = 0;
    let interesesPagados: number = 0;
    let fecha: Date = new Date();

    let i: number = (interes)/(100*cuotasAnuales)

    let periodoAmortizacion: PeriodoAmortizacion = {

      capital: capital,
      cuota: 0,
      interesAnual: interes,
      numeroCuotasTotal: años*cuotasAnuales,
      numeroCuotasAnuales: cuotasAnuales

    }


    const calculadorCuotaAmortizacion = new CalculadorCuotaAmortizacion(periodoAmortizacion);


    capitalPendiente = capital;

    let cuotas: number = años*cuotasAnuales;


    while (cuotas > 0) {

      let amortizacion: Amortizacion = {
        fecha: fecha,
        capitalInicial: capitalPendiente,
        cuota: this.redondear(calculadorCuotaAmortizacion.cuotaAmortizacion),
        amortizadoCuota: 0,
        interesCuota: 0,
        capitalAmortizado: 0,
        capitalPendiente: 0,
        interesesPagados: 0
      }

      amortizacion.interesCuota = this.redondear(amortizacion.capitalInicial * i);
      amortizacion.amortizadoCuota = this.redondear(calculadorCuotaAmortizacion.cuotaAmortizacion - amortizacion.interesCuota);
      amortizacion.capitalPendiente = this.redondear(amortizacion.capitalInicial - amortizacion.amortizadoCuota);
      capitalAmortizado = this.redondear(capitalAmortizado + amortizacion.amortizadoCuota)
      amortizacion.capitalAmortizado = capitalAmortizado
      capitalPendiente = this.redondear(amortizacion.capitalPendiente);
      interesesPagados = this.redondear(interesesPagados + amortizacion.interesCuota);
      amortizacion.interesesPagados = interesesPagados;
      fecha = new Date(fecha.setMonth(fecha.getMonth() + 12/cuotasAnuales));

      amortizaciones.push(amortizacion);

      cuotas--;

    }

    amortizaciones.forEach((amortizacion) =>{
      if(amortizacion.capitalPendiente < 1) {
        amortizacion.capitalPendiente = 0;
        amortizacion.capitalAmortizado = capital;
      }
    });

    return amortizaciones;
  }


  private redondear(valor: number): number {
    return JSON.parse(valor.toFixed(2));
  }


}
