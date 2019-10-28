import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromCounter from '@app/components/counter/store/counter.actions';
import { AppState } from '@app/app.reducers';

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
    this.store.select('counter')
        .subscribe( counter => this.counter = counter);
  }

  increment() {
    const action = new fromCounter.IncrementAction();
    this.store.dispatch(action);
  }

  decrement() {
    const action = new fromCounter.DecrementAction();
    this.store.dispatch(action);
  }
}
