'use strict';

angular.module('listingManagerApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('manage', {
                url: '/manage',
                templateUrl: 'app/manage/manage.html',
                controller: 'ManageCtrl',
                resolve: {
                    listings: function(EbayListings) {
                        EbayListings.listings = EbayListings.EbayListings.get({
                            search: '',
                            limit: '25',
                            offset: '25'
                        });
                        return EbayListings.listings.$promise;
                    }
                },
                // resolve: {
                //   listings: function(Listings) {
                //     Listings.listings = Listings.Listings.query();
                //     return Listings.listings.$promise;
                //   }
                // },
                data: {
                    authenticate: true
                }
            });
    });
