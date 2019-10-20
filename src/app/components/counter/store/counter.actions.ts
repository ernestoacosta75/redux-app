import { Action } from '@ngrx/store';


export enum CounterActionTypes {
  INCREMENT = '[Counter] Increment',
  DECREMENT = '[Counter] Decrement',
  MULTIPLY = '[Counter] Multiply',
  DIVIDE = '[Counter] Divide'
}

export class IncrementAction implements Action {
  readonly type = CounterActionTypes.INCREMENT;
  constructor(public payload?: any) {}
}

export class DecrementAction implements Action {
  readonly type = CounterActionTypes.DECREMENT;
  constructor(public payload?: any) {}
}

export class MultiplyAction implements Action {
  readonly type = CounterActionTypes.MULTIPLY;
  constructor(public payload?: any) {}
}

export class DivideAction implements Action {
  readonly type = CounterActionTypes.DIVIDE;
  constructor(public payload?: any) {}
}

export type CounterActions = IncrementAction | DecrementAction | MultiplyAction | DivideAction;
