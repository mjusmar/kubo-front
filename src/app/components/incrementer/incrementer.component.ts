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

  OnChangeInput( newValue: number){
    this.currentQty = (newValue >=10 ) ? 10 : (newValue <=1) ? 1 : newValue;
  }

  changeValueQty( value: number) { 
    this.currentQty += value;
    this.currentQty = (this.currentQty >= 10 && value >=1) ? 10: (this.currentQty <= 1 && value <=1) ? 1 : this.currentQty; 
    this.incrementEvent.emit(this.currentQty);
  }
}
