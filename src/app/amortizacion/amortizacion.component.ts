import { Component, Input, OnInit } from '@angular/core';
import { Amortizacion } from '../interfaces/Amortizacion';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalAnticipoCapitalComponent } from '../shared/modal-anticipo-capital/modal-anticipo-capital.component';
import { AnticipoCapital } from '../interfaces/AnticipoCapital';
import { calculadorDatosPostAnticipo } from '../helpers/calculador-datos-postanticipo.helper';
import { CalculoAmortizacionService } from '../services/calculo-amortizacion.service';

@Component({
  selector: 'app-amortizacion',
  templateUrl: './amortizacion.component.html',
  styleUrls: ['./amortizacion.component.css']
})
export class AmortizacionComponent implements OnInit {

  @Input()  tablaAmortizacion: Amortizacion[] = [];


  private _modalOptions: NgbModalOptions = {
    centered: true,
    modalDialogClass: 'modal-lg'
    
  }
  

  constructor(
    private _modalService: NgbModal,
    private _amortizaciones: CalculoAmortizacionService
  ) { }



  ngOnInit(): void {}



  async abrirModalAnticipo() {

    let modalRef = this._modalService.open(ModalAnticipoCapitalComponent, this._modalOptions);
    let datosAnticipo: AnticipoCapital = await modalRef.result;
    
    const calculadorPostAnticipo = new calculadorDatosPostAnticipo(this.tablaAmortizacion, datosAnticipo);
    this._amortizaciones.calculoAmortizaciones(
      calculadorPostAnticipo.newAmortizacion.capital,
      calculadorPostAnticipo.newAmortizacion.interes,
      calculadorPostAnticipo.newAmortizacion.años,
      calculadorPostAnticipo.newAmortizacion.cuotasAnuales);

    
  }

}
