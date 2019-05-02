import { Component, OnInit, Output ,Input, EventEmitter } from '@angular/core';
import { AutosService } from '../../servicios/autos.service';

@Component({
  selector: 'app-boton-delete',
  templateUrl: './boton-delete.component.html',
  styleUrls: ['./boton-delete.component.css']
})
export class BotonDeleteComponent implements OnInit {
@Input() idAuto: string;
@Output() public borrar = new EventEmitter<boolean>();
  constructor(private http: AutosService) { }

  ngOnInit() {
  }
/**
 * Eliminar
id: string */
public Eliminar(id: string) {
  this.http.eliminarAuto(id).subscribe((rta: any) => {
    console.log('Respuesta Eliminar ', rta);
    if (rta.resp === 'ok') {
      console.log('Emito el evento desde el boton');
      this.borrar.emit(true);
    }
  });
}
}
