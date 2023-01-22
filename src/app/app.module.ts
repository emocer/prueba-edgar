import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AmortizacionComponent } from './amortizacion/amortizacion.component';
import { ModalAnticipoCapitalComponent } from './shared/modal-anticipo-capital/modal-anticipo-capital.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    AmortizacionComponent,
    ModalAnticipoCapitalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
