import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import { MultiplyAction } from '../store/counter.actions';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styles: []
})
export class ChildrenComponent implements OnInit {

  counter: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    // Listening the changes on the state
    this.store.select('counter')
    .subscribe(counter => {
      this.counter = counter;
      console.log(this.counter);
    });
  }

  multiply() {
    this.counter *= 2;
    const action = new MultiplyAction();
    this.store.dispatch(action);
    // this.counterChanged.emit(this.counter);
  }

  divide() {
    this.counter /= 2;
    // this.counterChanged.emit(this.counter);
  }

  /**
   * To propagate the events emitted from the newphew
   * till the parent component.
   * @param newCounter
   */
  resetFromNephew(newCounter) {
    this.counter = newCounter;
    // this.counterChanged.emit(this.counter);
  }
}
