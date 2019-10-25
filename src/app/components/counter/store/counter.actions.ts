import { Action } from '@ngrx/store';

export const INCREMENT = '[Counter] Increment';
export const DECREMENT = '[Counter] Decrement';

export class IncrementAction implements Action {
  readonly type = INCREMENT;
}

export class DecrementAction implements Action {
  readonly type = DECREMENT;
}


export type CounterActions = IncrementAction | DecrementAction;

