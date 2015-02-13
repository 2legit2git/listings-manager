'use strict';

angular.module('listingManagerApp')
  .factory('Listings', function ($resource) {
    return $resource('/api/listings/:id/:controller', {
      id: '@_id'
    },
    {
      update: {
        method: 'PUT'
      }
    });
  });
