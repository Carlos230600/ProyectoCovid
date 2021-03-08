import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actuaciones',
  templateUrl: './actuaciones.component.html',
  styleUrls: ['./actuaciones.component.css']
})
export class ActuacionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  nuevaIncidencia(){
    alert('Nueva Inciencia Seleccionado');
  }


  eliminarIncidencia(){
    alert('Eliminar Incidencia Seleccionado');
  }

  modificarIncidencia(){
    alert('Modificar Incidencia Seleccionado');
  }
}
