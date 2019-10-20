import * as fromCounterActions from './counter.actions';
import { CounterActionTypes } from './counter.actions';

export interface CounterState {
  loaded: boolean;
  loading: boolean;
  data: any [];
}

export const initialState: CounterState = {
  loaded: false,
  loading: false,
  data: []
}


export function reducer(state: CounterState = initialState,
                        action: fromCounterActions.CounterActions) {

  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      break;

    case CounterActionTypes.DECREMENT:
      break;

    case CounterActionTypes.MULTIPLY:
      break;

    case CounterActionTypes.DIVIDE:
      break;
  }

  return state;
}
