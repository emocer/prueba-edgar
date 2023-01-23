import { Component, Input, OnInit } from '@angular/core';
import { Amortizacion } from '../interfaces/Amortizacion';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalAnticipoCapitalComponent } from '../shared/modal-anticipo-capital/modal-anticipo-capital.component';

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
    private _modalService: NgbModal
  ) { }



  ngOnInit(): void {}



  async abrirModalAnticipo() {

    let modalRef = this._modalService.open(ModalAnticipoCapitalComponent, this._modalOptions);
    let datosRecalculo = await modalRef.result;
    console.log(datosRecalculo);
  }

}
