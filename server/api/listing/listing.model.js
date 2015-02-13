'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ListingSchema = new Schema({
  recordID: Number,
  itemID: String,
  userID: String,
  quantity: Number,
  buyItNowPrice: Number,
  currentPrice: Number,
  startTime: String,
  title: String,
  description: String,
  listingDuration: String,
  listingType: String,
  stockControl: Number,
  timeLeft: String,
  watchCount: Number,
  questionCount: Number,
  newLeadCount: Number,
  galleryURL: String,
  quantityAvailable: Number,
  viewItemURL: String,
  viewItemURLForNaturalSearch: String,
  status: Number
});

module.exports = mongoose.model('Listing', ListingSchema);
