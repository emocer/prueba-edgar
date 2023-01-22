import { TestBed } from '@angular/core/testing';

import { CalculoAmortizacionService } from './calculo-amortizacion.service';
import { PeriodoAmortizacion } from '../interfaces/Periodo';
import { Amortizacion } from '../interfaces/Amortizacion';

describe('CalculoAmortizacionService', () => {
  let service: CalculoAmortizacionService;


  

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculoAmortizacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('prueba ejemplo enunciado', () => {

    const capital: number = 60000;
    const interesAnual: number = 2;
    const cuotasTotales: number = 120;

    const amortizaciones: Amortizacion[] = service.calculoAmortizaciones(capital, interesAnual, cuotasTotales);

    expect(amortizaciones.length).toEqual(120);

  });

});
