'use strict';

const GAME_STATES = require('../enums').GAME_STATES;
const res = require('../responses');

module.exports = {
  'AMAZON.StopIntent': function() {
    // updates
    this.handler.state = GAME_STATES.STOPPED;

    // response
    this.emit(':ask', res.keepGoing());
  },
  'AMAZON.CancelIntent': function() {
    this.emit(':tell', res.goodbye());
  },
  SessionEndedRequest() {
    console.log(`${this.handler.state || 'NO_STATE'} ended: ${this.event.request.reason}`);
  },
};
