/**
 * Reducers in NgRx are responsible for handling transitions from one state to
 * the next state in your application. Reducer functions handle these transitions
 * by determining which actions to handle based on the action's type.
 *
 * They are pure functions in that they produce the same output for a given input.
 * They are without side effects and handle each state transition synchronously.
 */
import { Action } from '@ngrx/store';
// import { CounterActions, CounterActionTypes, MultiplyAction } from './store/counter.actions';

export function counterReducer(state: number = 10, action: Action) {
  switch (action.type) {
    case 'INCREMENT':
      return state += 1;

    case 'DECREMENT':
      return state -= 1;

    case 'MULTIPLY':
      return state *= 2;

    case 'DIVIDE':
      return state /= 2;

      case 'RESET':
        return 0;

    default:
      return state;
  }

/**
export function counterReducer(state: number = 10, action: CounterActions) {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return state += 1;
      break;

    case CounterActionTypes.DECREMENT:
      return state -= 1;
      break;

    case CounterActionTypes.MULTIPLY:
      return state *= 2;
      break;

    case CounterActionTypes.DIVIDE:
      return state /= 2;
      break;

    default:
      return state;
  }*/
}
