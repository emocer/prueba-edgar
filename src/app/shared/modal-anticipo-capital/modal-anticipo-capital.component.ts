import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, UntypedFormGroup, Validators } from '@angular/forms';
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
      fechaDeposito: new FormControl<Date>(new Date(), Validators.required),
      cantidadDeposito: new FormControl<number>(0, Validators.required),
      resultado: new FormControl<boolean>(false, Validators.required),
    })
  }

  ngOnInit(): void {}

  recalculoTabla() {

    if(this.RecalculoForm.valid) {      
      this._activeModalService.close(this.RecalculoForm.value)
    } else {
      this.formValid = false;
    }
    
  }

}
