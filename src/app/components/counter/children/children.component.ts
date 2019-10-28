import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.reducers';
import { MultiplyAction, DivideAction } from '@app/components/counter/store/counter.actions';

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
    const action = new MultiplyAction(5);
    this.store.dispatch(action);
  }

  divide() {
    const action = new DivideAction(5);
    this.store.dispatch(action);
  }

  /**
   * To propagate the events emitted from the newphew
   * till the parent component.
   * @param newCounter New counter
   */
  resetFromNephew(newCounter) {
    this.counter = newCounter;
  }
}
