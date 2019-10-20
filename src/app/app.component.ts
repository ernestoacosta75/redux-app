import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import * as fromCounterActions from './components/counter/store/counter.actions';

interface AppState {
  counter: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-app';
  counter: number;

  constructor( private store: Store<AppState>) {
    // this.counter = 10;
    this.store.subscribe( state => {
      this.counter = state.counter;
    });
  }

  increment() {
    const action = new fromCounterActions.IncrementAction();

    this.store.dispatch(action);
  }

  decrement() {
    const action = new fromCounterActions.DecrementAction();

    this.store.dispatch(action);
  }
}
