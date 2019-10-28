import { INCREMENT, DECREMENT, MULTIPLY, CounterActions, DIVIDE } from './counter.actions';

export function counterReducer(state: number = 10, action: CounterActions) {

  switch(action.type) {

    case INCREMENT:
      return state += 1;

    case DECREMENT:
      return state -= 1;

    case MULTIPLY:
      return state * action.payload;

    case DIVIDE:
        return state / action.payload;

    default:
      return state;
  }

}
