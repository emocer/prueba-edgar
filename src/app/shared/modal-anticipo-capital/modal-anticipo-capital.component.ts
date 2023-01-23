import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-anticipo-capital',
  templateUrl: './modal-anticipo-capital.component.html',
  styleUrls: ['./modal-anticipo-capital.component.css']
})
export class ModalAnticipoCapitalComponent implements OnInit {

  RecalculoForm: UntypedFormGroup;
  formValid: boolean = true;

  constructor(
    private _fbuilder: FormBuilder,
    public _activeModalService: NgbActiveModal
  ) {
    this.RecalculoForm =  this._fbuilder.group({
      fechaDeposito: [, Validators.required],
      cantidadDeposito: [, Validators.required],
      resultado: [, Validators.required]
    })
  }

  ngOnInit(): void {}

  recalculoTabla() {

    if(this.RecalculoForm.valid) {      
      this._activeModalService.close(this.RecalculoForm.value)
      this.formValid = true;
    } else {
      this.formValid = false;
    }
    
  }

}
