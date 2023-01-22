import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAnticipoCapitalComponent } from './modal-anticipo-capital.component';

describe('ModalRecalcularAmortizacionComponent', () => {
  let component: ModalAnticipoCapitalComponent;
  let fixture: ComponentFixture<ModalAnticipoCapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAnticipoCapitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAnticipoCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
