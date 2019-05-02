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
import { BotonDeleteComponent } from './componentes/boton-delete/boton-delete.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { MenuComponent } from './componentes/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    TablaVehiculosComponent,
    GrillaComponent,
    FormularioComponent,
    BotonDeleteComponent,
    BusquedaComponent,
    BuscarComponent,
    MenuComponent,
    
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
