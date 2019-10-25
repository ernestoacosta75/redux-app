import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IncrementAction, DecrementAction } from './components/counter/store/counter.actions';

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
      this.counter = state.counter; // IN this way, I'm subscribed to all the changes in the state
    });
  }

  increment() {
    const action = new IncrementAction();

    this.store.dispatch(action);

    // const action = new fromCounterActions.IncrementAction();
    // this.store.dispatch(CounterActions.LoadIncrement(null));
  }

  decrement() {
    const action = new DecrementAction();

    this.store.dispatch(action);

    // const action = new fromCounterActions.DecrementAction();
    // this.store.dispatch(CounterActions.LoadDecrement(null));

  }
}
