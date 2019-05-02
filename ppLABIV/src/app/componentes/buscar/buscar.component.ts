import { Component, OnInit } from '@angular/core';
import { Auto } from '../../servicios/autos.service';
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  public lista:Array<Auto> = null;
  constructor() { }

  ngOnInit() {
  }
  public MostrarElemento(event: Array<Auto>){
    this.lista = event;
  }
}
