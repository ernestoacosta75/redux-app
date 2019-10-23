import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import * as fromCounterActions from './components/counter/store/counter.actions';
import { Observable } from 'rxjs';
import { CounterActions } from './components/store/counter-actions';

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
  counter$: Observable<number[]>;

  constructor( private store: Store<AppState>) {
    this.store.subscribe( state => {
      this.counter = state.counter;
    });
  }

  increment() {
    const action: Action = {
      type: 'INCREMENT'
    }

    this.store.dispatch(action);

    // const action = new fromCounterActions.IncrementAction();
    //this.store.dispatch(CounterActions.LoadIncrement(null));
  }

  decrement() {
    const action: Action = {
      type: 'DECREMENT'
    }

    this.store.dispatch(action);

    // const action = new fromCounterActions.DecrementAction();
    // this.store.dispatch(CounterActions.LoadDecrement(null));

  }
}
