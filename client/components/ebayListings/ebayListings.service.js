'use strict';

angular.module('listingManagerApp')
    .factory('EbayListings', function($cacheFactory, $resource) {
        // return $resource('/api/listings/:id/:controller', {
        // 
        return {
            EbayListings: $resource('http://replaceyourdomain.com/siliconehose/functions/resourceJson.php', {
                //return $resource('http://replaceyourdomain.com/siliconehose/functions/jsonTest.php?itemID=', {
                itemID: '@itemID'
            }, {
                getArray: {
                    method: 'GET',
                    cache: true,
                    isArray: true
                },
                getOne: {
                    method: 'GET',
                    cache: true,
                    isArray: false
                }
            })
        };


    });
