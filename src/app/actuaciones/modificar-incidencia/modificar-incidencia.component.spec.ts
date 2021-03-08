import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarIncidenciaComponent } from './modificar-incidencia.component';

describe('ModificarIncidenciaComponent', () => {
  let component: ModificarIncidenciaComponent;
  let fixture: ComponentFixture<ModificarIncidenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarIncidenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarIncidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
