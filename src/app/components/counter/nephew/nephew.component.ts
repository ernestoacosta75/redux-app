import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nephew',
  templateUrl: './nephew.component.html',
  styles: []
})
export class NephewComponent implements OnInit {

  @Input() counter: number;
  @Output() counterChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  reset() {
    this.counter = 0;
    this.counterChanged.emit(this.counter);
  }

}
