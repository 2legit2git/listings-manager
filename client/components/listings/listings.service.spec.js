'use strict';

describe('Service: Listings', function () {

  // load the service's module
  beforeEach(module('listingManagerApp'));

  // instantiate service
  var Listings;
  beforeEach(inject(function (_Listings_) {
    Listings = _Listings_;
  }));

  it('should do something', function () {
    expect(!!Listings).toBe(true);
  });

});
