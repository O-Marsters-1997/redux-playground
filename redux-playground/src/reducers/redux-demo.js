const redux = require("redux");

// Always takes two parameters the old state and the action that is assigned to mutate the state accordingly.
// Must return a new state object.
// Should be a pure function, should be no side effects, must not send http requests.
// Reducer should be a function that takes an input and returns a function
const counterReducer = (state = { counter: 0 }, action) => {
  // Need to give this a default value

  if (action.type == "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  //   this is returned if the action type is not set to be increment
  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

// dispatch is a method that dispatches an action and an action is a javascript object.
// do different things inside of the reducer for different actions, that's why you get the action as a second argument.
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

// the dispatch is what calls the reducer function.