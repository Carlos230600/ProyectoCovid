import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.css']
})
export class IncidenciasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pagant(){
    alert('Pagina anterior');
  }

  pagsig(){
    alert('Pagina siguiente');
  }

  abrir(){
    alert('Abrir');
  }

}
