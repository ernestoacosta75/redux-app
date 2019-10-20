/**
 * Reducers in NgRx are responsible for handling transitions from one state to
 * the next state in your application. Reducer functions handle these transitions
 * by determining which actions to handle based on the action's type.
 *
 * They are pure functions in that they produce the same output for a given input.
 * They are without side effects and handle each state transition synchronously.
 */
import { Action } from '@ngrx/store';

export function counterReducer(state: number = 10, action: Action) {
  switch (action.type) {
    case 'INCREMENT':
      return state += 1;
      break;

    case 'DECREMENT':
      return state -= 1;
      break;

    case 'MULTIPLY':
      return state *= 2;
      break;

    case 'DIVIDE':
      return state /= 2;
      break;

    default:
      return state;
  }
}
