'use strict';

angular.module('listingManagerApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('manage.item', {
                // make default id ManageItemCtrl
                url: '/:id',
                templateUrl: 'app/manage/item/item.html',
                controller: 'ManageItemCtrl',
                resolve: {
                    myItem: function($stateParams, EbayListings) {
                            //alert($stateParams.id);
                            EbayListings.listing = EbayListings.EbayListings.get({
                                itemID: $stateParams.id
                            });
                            return EbayListings.listing.$promise;
                        }
                        // listings: function(EbayListings) {
                        //     EbayListings.listings = EbayListings.EbayListings.get();
                        //     return EbayListings.listings.$promise;
                        // }
                        // myItem: function($stateParams, listings) {
                        //   alert('hey');
                        //   return _.find(listings, {
                        //     itemID: $stateParams.id
                        //   });
                        // }
                        // myItem: function($stateParams, Listings) {
                        //   return _.find(Listings.listings, {
                        //     itemID: $stateParams.id
                        //   });
                        // }
                }
            });
    });
