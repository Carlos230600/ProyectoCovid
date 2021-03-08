import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaincidenciaComponent } from './nuevaincidencia.component';

describe('NuevaincidenciaComponent', () => {
  let component: NuevaincidenciaComponent;
  let fixture: ComponentFixture<NuevaincidenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaincidenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaincidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
