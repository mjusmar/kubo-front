import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.scss']
})
export class IncrementerComponent implements OnInit {

  @Input() currentQty: number=1;
  @Output() incrementEvent: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Función que toma el valor ingresado como cantidad de productos y verifica que éste tenga un valor
   * entre 0 y 10, de lo contrario cambia el valor a este rango.
   * @param newValue la cantidad actual del producto
   */
  onChangeInput( newValue: number){
    this.currentQty = (newValue >= 10 ) ? 10 : (newValue <= 1) ? 1 : newValue;
    this.incrementEvent.emit(this.currentQty);
  }

  /**
   * Función que incrementa la cantidad total dependiendo del valor ingresado, con un valor mínimo de 1 y máximo de 10
   * @param value cantidad a incrementar
   */
  changeValueQty( value: number) { 
    this.currentQty += value;
    this.currentQty = (this.currentQty >= 10 && value >= 1) ? 10 : (this.currentQty <= 1 && value <= 1) ? 1 : this.currentQty; 
    this.incrementEvent.emit(this.currentQty);
  }

}
