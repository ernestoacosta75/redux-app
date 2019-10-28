import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromCounter from '@app/components/counter/store/counter.actions';

@Component({
  selector: 'app-nephew',
  templateUrl: './nephew.component.html',
  styles: []
})
export class NephewComponent implements OnInit {

  counter: number;

  constructor(private store: Store<number>) { }

  ngOnInit() {
    this.store.select('counter')
      .subscribe(counter => {
        this.counter = counter;
      });
  }

  reset() {
    const action = new fromCounter.ResetAction();
    this.store.dispatch(action);
  }

}
