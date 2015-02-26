'use strict';

describe('Service: EbayListings', function () {

  // load the service's module
  beforeEach(module('listingManagerApp'));

  // instantiate service
  var EbayListings;
  beforeEach(inject(function (_EbayListings_) {
    EbayListings = _EbayListings_;
  }));

  it('should do something', function () {
    expect(!!EbayListings).toBe(true);
  });

});
