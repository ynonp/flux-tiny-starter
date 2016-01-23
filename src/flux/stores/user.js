import Store from '../store';
import Dispatcher from '../dispatcher';
import symbols from '../symbols';

/**
 * A Store is a singleton whose job is to contain data and notify changes
 * to listeners. 
 *
 * We'll usually use EventEmitter to manage subscriptions and event notifications
 * but that code is best kept in one place - a Store object.
 *
 * Each specific store is responsible for a specific type of data.
 */

const UsersStore = Object.assign({}, Store, {
  text: "Hello World",

  setText: function(text) {
    this.text = text;
    this.trigger();
  },
});

/**
 * A dispatcher makes sure an action doesn't need to know which store
 * it affects.
 * 
 * Every action is delivered to EVERY store in the system.
 *
 * An action represents an event, and the store is responsible to modifying
 * its data according to the event.
 * A dispatchToken is used to specify event handling order: each store can use
 * another store's dispatch token to wait for that store to handle the event
 * via the method Dispatcher.waitFor(anotherStoreDispatchToken)
 */

UsersStore.dispatchToken = Dispatcher.register(function(action) {
  switch(action.type) {    
    // handle incoming events and modify store data
  case symbols.SET_HELLO_TEXT:
    UsersStore.setText(action.payload);
    break;
  }
});

export default UsersStore;

