import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Auto{
  id: string;
  modelo: string;
  marca: string;
  precio: number;
  cantidadPuertas: string;
  RutaDeFoto: string;
}

@Injectable({
  providedIn: 'root'
})

export class AutosService {
  /** Antes de iniciar, si se requiere usar base de datos, no olvide revisar el archivo Databases.php
   * para ver que la base de datos que va a usar es la correcta, como nombre tiene 'labIV'.
   * Los archivos AutoApi.php y Auto.php contienen todos los metodos necesarios para un ABM.
   *
   * El localhost de los salones para Xampp es http://localhost:8080/
   */
  constructor(private httpClient: HttpClient) { }
  /**
   * traerAutos
   */
  public traerAutos() {
    return this.httpClient.get('http://192.168.2.31:3003/autos');
  }
  public agregarAuto(data: any){
    return this.httpClient.post('http://192.168.2.31:3003/autos',data);
  }

  public eliminarAuto(idAux: any)
  {
    return this.httpClient.delete('http://192.168.2.31:3003/autos'+idAux);
    //return this.httpClient.post('http://localhost/PPV2/ppLABIV/backend/remove', { id: idAux });
  }
}
