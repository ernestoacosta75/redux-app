import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styles: []
})
export class ChildrenComponent implements OnInit {

  @Input() counter: number;

  @Output() counterChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  multiply() {
    this.counter *= 2;
    this.counterChanged.emit(this.counter);
  }

  divide() {
    this.counter /= 2;
    this.counterChanged.emit(this.counter);
  }
}
