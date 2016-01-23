/**
 * Actions are identified by a string called "type". Each action function (or action creator)
 * sets the value of the "type" field in the action and when that action reaches the dispatcher
 * the various stores recognize relevant actions by their type.
 *
 * While it's perfectly ok to use hard coded strings all over the place, a better design
 * choice is to use constants defined in an external file, which is what we have here.
 *
 * It's ok to define more "symbol" files as the application grows, or group everything in
 * one place. I personally prefer the later.
 */

const symbols = {
  SET_HELLO_TEXT: '@@set-hello-text'
};

export default symbols;
