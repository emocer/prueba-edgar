import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmortizacionComponent } from './amortizacion.component';
import { CalculoAmortizacionService } from '../services/calculo-amortizacion.service';
import { Amortizacion } from '../interfaces/Amortizacion';

describe('AmortizacionComponent', () => {
  let component: AmortizacionComponent;
  let fixture: ComponentFixture<AmortizacionComponent>;
  let servicio: CalculoAmortizacionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmortizacionComponent ],
      providers: [CalculoAmortizacionService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmortizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    servicio = TestBed.inject(CalculoAmortizacionService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('prueba impresion 120 elementos', () => {

    const capital: number = 60000;
    const interesAnual: number = 2;
    const cuotasTotales: number = 120;
    
    let amortizaciones: Amortizacion[] = servicio.calculoAmortizaciones(capital, interesAnual, cuotasTotales);
    component.tablaAmortizacion = amortizaciones;
    const htmlComponent = fixture.nativeElement;
    fixture.detectChanges();
    const filas = htmlComponent.querySelectorAll('tr');
    expect(filas.length).toEqual(121);
    

  });

});
