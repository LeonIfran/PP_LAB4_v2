import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import {Auto, AutosService} from './../../servicios/autos.service';
//import { AutosService } from 'src/app/servicios/autos.service';

@Component({
  selector: 'app-tabla-vehiculos',
  templateUrl: './tabla-vehiculos.component.html',
  styleUrls: ['./tabla-vehiculos.component.css']
})
export class TablaVehiculosComponent implements OnInit {
  public listado: Array<Auto>;
  constructor(private http: AutosService) { }

  ngOnInit() {
    console.log("Llamo a traer autos");
    this.cargarLista();
  }
  /**
   * cargarLista
   */
  public cargarLista() {
    this.http.traerAutos().subscribe((data: any) =>{
      console.log(data);
      this.listado = data;
    });
  }
  public recargar(event)
  {
    console.log("Evento: "+event);
    if (event === true) 
    {
      this.cargarLista();
    }
  }

}
