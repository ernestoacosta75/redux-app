import { createType, createActionCreator } from '../store-actions-creator';

export class CounterActions {
    /*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /*              TYPE DEFINITIONS                */
    /*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    static LOAD_INCREMENT = createType('[Counter] Increment');
    static LOAD_DECREMENT = createType('[Counter] Decrement');
    static LOAD_MULTIPLY = createType('[Counter] Multiply');
    static LOAD_DIVIDE = createType('[Counter] Divide');

    /*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /*              ACTION CREATORS                 */
    /*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    static LoadIncrement = createActionCreator<number>(CounterActions.LOAD_INCREMENT);
    static LoadDecrement = createActionCreator<number>(CounterActions.LOAD_DECREMENT);
    static LoadMultilpy = createActionCreator<number>(CounterActions.LOAD_MULTIPLY);
    static LoadDivide = createActionCreator<number>(CounterActions.LOAD_DIVIDE);
}
