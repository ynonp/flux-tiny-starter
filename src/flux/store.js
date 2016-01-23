import { EventEmitter } from 'events';
const CHANGE_EVENT = '@@change-event';

/**
 * The generic Store simplifies EventEmitter functions
 * to reduce boilerplate (instead of extending EventEmitter
 * again and again from each specific store).
 */

export default Object.assign({}, EventEmitter.prototype, {
  trigger: function() {
    this.emit(CHANGE_EVENT);
  },
  
  subscribe: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  unsubscribe: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }  
});

