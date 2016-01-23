import _ from 'underscore';

import Dispatcher from '../dispatcher';
import symbols from '../symbols';

/**
 * Every action is just a function that dispatches some data. These
 * functions are sometimes called Action Creators when accuracy is required,
 * but I'll jsut call both "actions" for brevity.
 *
 * Each file in the actions/ folder should export a collection of 
 * actions to be used by components.
 *
 * Actions are where you'll usually put Ajax calls or any application
 * flow logic, as you can see in the demo setTextLater async action.
 */

const actions = {
  setText,
  setRandomNumber,
};

function setRandomNumber() {
  const text = "And the winner is: ... " + _.random(100);
  Dispatcher.dispatch({ type: symbols.SET_HELLO_TEXT, payload: text });
}

function setText(text) {
  Dispatcher.dispatch({ type: symbols.SET_HELLO_TEXT, payload: text });
}

function setTextLater(text) {
  setTimeout(function() {
    Dispatcher.dispatch({ type: symbols.SET_HELLO_TEXT, payload: text });
  }, 1000);
}

export default actions;
