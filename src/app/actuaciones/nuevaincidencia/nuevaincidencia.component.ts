import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevaincidencia',
  templateUrl: './nuevaincidencia.component.html',
  styleUrls: ['./nuevaincidencia.component.css']
})
export class NuevaincidenciaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Cancelar(){
    alert('Cancelar Presionado');
  }

  Aceptar(){
    alert('Aceptar Presionado')
  }

}
