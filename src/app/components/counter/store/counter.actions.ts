import { Action } from '@ngrx/store';

export const INCREMENT = '[Counter] Increment';
export const DECREMENT = '[Counter] Decrement';
export const MULTIPLY = '[Counter] Multiply';
export const DIVIDE = '[Counter] Divide';

export class IncrementAction implements Action {
  readonly type = INCREMENT;
}

export class DecrementAction implements Action {
  readonly type = DECREMENT;
}

export class MultiplyAction implements Action {
  readonly type = MULTIPLY;
  constructor(public payload: number) {}
}

export class DivideAction implements Action {
  readonly type = DIVIDE;
  constructor(public payload: number) {}
}

// This new type specify all the valid actions that we can send to the reducer
export type CounterActions = IncrementAction | DecrementAction | MultiplyAction | DivideAction;

