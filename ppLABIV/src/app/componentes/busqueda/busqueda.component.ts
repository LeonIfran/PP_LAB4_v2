import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Auto, AutosService} from '../../servicios/autos.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
@Output() public buscar = new EventEmitter<Auto[]>();
public busquedaGroup: FormGroup;
  constructor(private http: AutosService) { }

  ngOnInit() {
    this.busquedaGroup = new FormGroup({
      modelo: new FormControl('',[Validators.required])
    });
  }
  public Buscar() {
    //traigo el modelo a buscar
    const modelo: string = this.busquedaGroup.value.modelo;

    //traigo todos los autos
    this.http.traerAutos().subscribe((data: Array<Auto>) =>{
      const auxArr: Array<Auto> = new Array<Auto>();

      //filtro los autos que matcheen el modelo
      for(const auto of data) {
        if (auto.modelo === modelo) {
          auxArr.push(auto);
        }
      }
      //emito mi array
      this.buscar.emit(auxArr);
    });
  }
}
