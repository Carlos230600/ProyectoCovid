import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { IncidenciasComponent } from './incidencias/incidencias.component';
import { ActuacionesComponent } from './actuaciones/actuaciones.component';
import { NuevaincidenciaComponent } from './actuaciones/nuevaincidencia/nuevaincidencia.component';
import { ModificarIncidenciaComponent } from './actuaciones/modificar-incidencia/modificar-incidencia.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    IncidenciasComponent,
    ActuacionesComponent,
    NuevaincidenciaComponent,
    ModificarIncidenciaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
