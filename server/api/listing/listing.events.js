/**
 * Listing model events
 */

'use strict';

var EventEmitter = require('events').EventEmitter;
var Listing = require('./listing.model');
var ListingEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ListingEvents.setMaxListeners(0);

// Mongoose events
var events = ['init', 'validate', 'save', 'remove'];

// Register the event emitter to the mongoose events
for (var i = 0, eventsLength = events.length; i < eventsLength; i++) {
  var event = events[i];
  Listing.schema.post(event, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ListingEvents.emit(event, doc);
  }
}

module.exports = ListingEvents;
