/**
 * Generic action creator.
 * It accepts a map of async states to action types
 * as well as a thunk creator. It will yield a new
 * thunk creator which wraps the provided one with
 * our async state logic.
 *
 * Redux Thunk is a middleware that lets you call action creators
 * that return a function instead of an action object. That function
 * receives the store’s dispatch method, which is then used to dispatch
 * regular synchronous actions inside the body of the function once the
 * asynchronous operations have completed.
 *
 * If you’re curious, a thunk is a concept in programming where a function
 * is used to delay the evaluation/calculation of an operation.
 */
const asyncActionCreator = (asyncTypes, createThunk) => (...args) => {
  const thunk = createThunk(...args);

  return dispatch => {
    dispatch({ type: asyncTypes.pending });

    // Assuming that the wrapped thunk produces a Promise,
    // we call the dispatch on the thunk and since dispatch
    // yields its result, we can utilize the returned Promise
    return dispatch(thunk)
      .then(payload => ({
        type: asyncTypes.complete,
        payload,
      }))
      .catch(err => ({
        type: asyncTypes.error,
        error: true,
        payload: err,
      }));
  };
};
