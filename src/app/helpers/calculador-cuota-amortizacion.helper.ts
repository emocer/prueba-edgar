import { PeriodoAmortizacion } from '../interfaces/Periodo';



export class CalculadorCuotaAmortizacion {
    
    constructor(private _periodoAmortizacion: PeriodoAmortizacion) {}

    public get cuotaAmortizacion(): number {

        let interes: number = (this._periodoAmortizacion.interesAnual) / (100 * this._periodoAmortizacion.numeroCuotasAnuales);
        let capital: number = this._periodoAmortizacion.capital;
        let cuotasTotales: number = this._periodoAmortizacion.numeroCuotasTotal;


        let factorSuma: number = Math.pow(1 + interes, cuotasTotales);
        let cociente: number = (interes * factorSuma)/(factorSuma - 1)
        let cuota: number = capital * cociente;
        return cuota;
    }
}