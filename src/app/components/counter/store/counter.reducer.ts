import * as fromCounter from '@app/components/counter/store/counter.actions';

export function counterReducer(state: number = 10, action: fromCounter.CounterActions) {

  switch(action.type) {

    case fromCounter.INCREMENT:
      return state += 1;

    case fromCounter.DECREMENT:
      return state -= 1;

    case fromCounter.MULTIPLY:
      return state * action.payload;

    case fromCounter.DIVIDE:
      return state / action.payload;

    case fromCounter.RESET:
      return state = action.payload;

    default:
      return state;
  }

}
