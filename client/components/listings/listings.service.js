'use strict';

angular.module('listingManagerApp')
  .factory('Listings', function($resource) {
    // return $resource('/api/listings/:id/:controller', {
    // 
    return {
      Listings: $resource('http://mydomain.com/siliconehose/functions/jsonTest.php', {
        //return $resource('http://replacedomain.com/siliconehose/functions/jsonTest.php?itemID=', {
        itemID: '@itemID'
      }, {
        update: {
          method: 'PUT'
        }
      })
    };


  });
 