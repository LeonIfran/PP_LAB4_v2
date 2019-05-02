import { Component, OnInit } from '@angular/core';
import {AutosService} from '../../servicios/autos.service';
import {FormGroup,FormControl,Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public profileGroup: FormGroup;
  constructor(private http: AutosService) { }

  ngOnInit() {
    this.profileGroup = new FormGroup({
      modelo: new FormControl('',[Validators.required]),
      marca: new FormControl('',[Validators.required]),
      precio: new FormControl('',Validators.compose([Validators.min(0), Validators.required])),
      cantidadPuertas: new FormControl('',Validators.compose([Validators.required, Validators.min(3), Validators.max(5)])),
      rutaDeFoto: new FormControl('',[Validators.required])
    });
  }
  public Mostrar() {// the values of enabled controls as an object with a key-value pair for each member of the group.
    //Esto es un array con todos los controles en estado enabled
    
    const autoSubida = { auto: this.profileGroup.value };
    //console.log(this.profileGroup.value);
    this.http.agregarAuto(autoSubida).subscribe((rta: any) => {
      // console.log(rta);
      if (rta.ok) {
        console.log('Cargado');
      }
    });
  }
  
}
