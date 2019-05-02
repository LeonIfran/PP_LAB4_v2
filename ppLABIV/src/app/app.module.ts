import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//reactive forms
import {ReactiveFormsModule} from '@angular/forms';

//http modulo
import {HttpClientModule} from '@angular/common/http'

//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaVehiculosComponent } from './componentes/tabla-vehiculos/tabla-vehiculos.component';
import {AutosService} from './servicios/autos.service';
import { GrillaComponent } from './componentes/grilla/grilla.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaVehiculosComponent,
    GrillaComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
