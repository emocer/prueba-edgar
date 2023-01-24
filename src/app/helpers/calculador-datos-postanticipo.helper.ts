import { Amortizacion } from '../interfaces/Amortizacion';
import { AnticipoCapital } from '../interfaces/AnticipoCapital';

export class calculadorDatosPostAnticipo {
    
    constructor(
        private _tablaAmortizacion: Amortizacion[],
        private _datosRecalculo: AnticipoCapital,
    ) {}


    public get newAmortizacion(): any {

                

        return 1;
    }
}