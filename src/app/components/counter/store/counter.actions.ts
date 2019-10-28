import { Action } from '@ngrx/store';

export const INCREMENT = '[Counter] Increment';
export const DECREMENT = '[Counter] Decrement';
export const MULTIPLY = '[Counter] Multiply';

export class IncrementAction implements Action {
  readonly type = INCREMENT;
}

export class DecrementAction implements Action {
  readonly type = DECREMENT;
}

export class MultiplyAction implements Action {
  readonly type = MULTIPLY;

}


export type CounterActions = IncrementAction | DecrementAction | MultiplyAction;

