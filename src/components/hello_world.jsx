import React from 'react';
import ReactDOM from 'react-dom';

import UserStore from '../flux/stores/user';
import UserActions from '../flux/actions/user';

/**
 * A sample component that pulls its state from a Store
 *
 * Components listening to stores need to call store.subscribe
 * on their componentDidMount method to get store change events,
 * and thus also unsubscribe on componentWillUnmount.
 *
 * Usually we'll implement a single stateFromStore method that
 * reads the new state from the store and call this.setState(...)
 * on the component. 
 *
 * Both the store and actions are singleton objects, and you 
 * can have multiple stores and multiple action objects.
 *
 * The method stateFromStore is usually the only place we'll want
 * to call this.setState from. Every other action triggers a
 * corresponding "action" function.
 */

export default React.createClass({
  getInitialState: function() {
    return this.stateFromStore(UserStore);
  },

  componentDidMount: function() {
    UserStore.subscribe(this.handleStoreChange);
  },

  componentWillUnmount: function() {
    UserStore.unsubscribe(this.handleStoreChange);
  },

  handleStoreChange: function() {
    this.setState(this.stateFromStore(UserStore));
  },

  stateFromStore: function(store) {
    return { text: store.text };
  },

  setRandomText: function() {
    UserActions.setRandomNumber();    
  },

  render: function() {
    return (<div>
      {this.state.text}
      <button onClick={this.setRandomText}>Set Random Text</button>
    </div>);
  }
});


