import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Auto} from '../../servicios/autos.service';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {
  @Input() lista: Array<Auto>;
  @Output() recargarGrilla = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  /**
   * RecargarGrilla
   */
  public RecargarGrilla(event) {
    console.log('evento grilla ' + event);
    this.recargarGrilla.emit(event);
  }
}
