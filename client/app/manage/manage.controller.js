'use strict';

angular.module('listingManagerApp')
    .controller('ManageCtrl', function($scope, $state, $stateParams, $http, EbayListings) {
        $scope.ebayListings = EbayListings;
        console.log($scope.ebayListings.listings.items);
        // $scope.filterOptions = {
        //     filterText: "",
        //     useExternalFilter: true
        // };
        // $scope.totalServerItems = 0;
        // $scope.pagingOptions = {
        //     pageSizes: [5, 10, 20],
        //     pageSize: 5,
        //     currentPage: 1
        // };

        // $scope.setPagingData = function(data, page, pageSize) {
        //     var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
        //     $scope.myData = pagedData;
        //     $scope.totalServerItems = data.length;
        //     if (!$scope.$$phase) {
        //         $scope.$apply();
        //     }
        // };

        // $scope.getPagedDataAsync = function(pageSize, page, searchText) {
        //     setTimeout(function() {
        //         var data;
        //         if (searchText) {
        //             var ft = searchText.toLowerCase();
        //             $http.get('http://replacedomain.com/siliconehose/functions/jsonTest.php').success(function(largeLoad) {
        //                 data = largeLoad.filter(function(item) {
        //                     return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
        //                 });
        //                 $scope.setPagingData(data, page, pageSize);
        //             });
        //         } else {
        //             $http.get('http://replacedomain.com/siliconehose/functions/jsonTest.php').success(function(largeLoad) {
        //                 $scope.setPagingData(largeLoad, page, pageSize);
        //             });
        //         }
        //     }, 100);
        // };

        // $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);

        // $scope.$watch('pagingOptions', function(newVal, oldVal) {
        //     if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
        //         $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
        //     }
        // }, true);
        // $scope.$watch('filterOptions', function(newVal, oldVal) {
        //     if (newVal !== oldVal) {
        //         $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
        //     }
        // }, true);
        // //alert($stateParams.id);

        // $scope.mySelections = [];

        // //$state.go("manage.item", {id: $stateParams.id});



        // /*     $scope.getItems = function() {
        //       $http.get('http://replacedomain.com/siliconehose/functions/jsonTest.php').
        //       success(function(data, status, header, config) {
        //         $state.current.data.myData = $scope.myData = $scope.items = data;

        //         console.log('y');
        //         console.log(JSON.stringify($scope.items));
        //       }).
        //       error(function(data, status, headers, config) {
        //         console.log('n');
        //         console.log(JSON.stringify($scope.items));
        //       });
        //     }*/


        // $state.current.data.myData = $scope.myData;
        // //[{"recordID": 1,"itemID": 260357155801,"userID": "phil","quantity": 1000,"buyItNowPrice": 18.99,"currentPrice": 18.99,"startTime": "2009-02-03 23:47:41","title": "NXS MANUAL BOOST CONTROLLER 280Z TURBO WRX SRT-4 SUPRA","description": null,"listingDuration": "GTC","listingType": "FixedPriceItem","stockControl": 0,"timeLeft": "PT3H59M15S","watchCount": 5,"questionCount": 22,"newLeadCount": 22,"galleryURL": "http://thumbs.ebaystatic.com/pict/2603571558016464_17.jpg","quantityAvailable": 927,"viewItemURL": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-280Z-TURBO-WRX-SRT-4-SUPRA-/260357155801","viewItemURLForNaturalSearch": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-280Z-TURBO-WRX-SRT-4-SUPRA?item=260357155801&category=33742&cmd=ViewItem","status": 4}, {"recordID": 2,"itemID": 250305228979,"userID": "phil","quantity": 924,"buyItNowPrice": 18.99,"currentPrice": 18.99,"startTime": "2008-10-07 03:25:14","title": "NEW NXS MANUAL BOOST CONTROLLER ECU CHIP TURBO AUDI MBC","description": null,"listingDuration": "GTC","listingType": "FixedPriceItem","stockControl": 0,"timeLeft": "PT6H36M48S","watchCount": 8,"questionCount": 12,"newLeadCount": 12,"galleryURL": "http://thumbs.ebaystatic.com/pict/2503052289796464_21.jpg","quantityAvailable": 864,"viewItemURL": "http://cgi.ebay.com/ebaymotors/NEW-NXS-MANUAL-BOOST-CONTROLLER-ECU-CHIP-TURBO-AUDI-MBC-/250305228979","viewItemURLForNaturalSearch": "http://cgi.ebay.com/ebaymotors/NEW-NXS-MANUAL-BOOST-CONTROLLER-ECU-CHIP-TURBO-AUDI-MBC?item=250305228979&category=33742&cmd=ViewItem","status": 4}, {"recordID": 3,"itemID": 260297422742,"userID": "phil","quantity": 1009,"buyItNowPrice": 18.99,"currentPrice": 18.99,"startTime": "2008-10-07 19:42:10","title": "NXS MANUAL BOOST CONTROLLER RT/TT VR4 3000GT AWD GALANT","description": null,"listingDuration": "GTC","listingType": "FixedPriceItem","stockControl": 0,"timeLeft": "PT22H53M44S","watchCount": 1,"questionCount": 1,"newLeadCount": 1,"galleryURL": "http://thumbs.ebaystatic.com/pict/2602974227426464_21.jpg","quantityAvailable": 970,"viewItemURL": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-RT-TT-VR4-3000GT-AWD-GALANT-/260297422742","viewItemURLForNaturalSearch": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-RT-TT-VR4-3000GT-AWD-GALANT?item=260297422742&category=33742&cmd=ViewItem","status": 4}, {"recordID": 4,"itemID": 250351870168,"userID": "phil","quantity": 1000,"buyItNowPrice": 18.99,"currentPrice": 18.99,"startTime": "2009-01-05 18:45:00","title": "NXS MOTORSPORTS MANUAL BOOST CONTROLLER 1.8T GOLF CIVIC","description": null,"listingDuration": "GTC","listingType": "FixedPriceItem","stockControl": 0,"timeLeft": "PT22H56M34S","watchCount": 0,"questionCount": 10,"newLeadCount": 10,"galleryURL": "http://thumbs.ebaystatic.com/pict/2503518701686464_18.jpg","quantityAvailable": 955,"viewItemURL": "http://cgi.ebay.com/ebaymotors/NXS-MOTORSPORTS-MANUAL-BOOST-CONTROLLER-1-8T-GOLF-CIVIC-/250351870168","viewItemURLForNaturalSearch": "http://cgi.ebay.com/ebaymotors/NXS-MOTORSPORTS-MANUAL-BOOST-CONTROLLER-1-8T-GOLF-CIVIC?item=250351870168&category=33742&cmd=ViewItem","status": 4}, {"recordID": 5,"itemID": 250353010803,"userID": "phil","quantity": 1000,"buyItNowPrice": 18.99,"currentPrice": 18.99,"startTime": "2009-01-05 23:11:27","title": "NXS MANUAL BOOST CONTROLLER TURBO TSI ECLIPSE DSM XS GT","description": null,"listingDuration": "GTC","listingType": "FixedPriceItem","stockControl": 0,"timeLeft": "P1DT3H23M1S","watchCount": 24,"questionCount": 11,"newLeadCount": 11,"galleryURL": "http://thumbs.ebaystatic.com/pict/2503530108036464_18.jpg","quantityAvailable": 807,"viewItemURL": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-TURBO-TSI-ECLIPSE-DSM-XS-GT-/250353010803","viewItemURLForNaturalSearch": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-TURBO-TSI-ECLIPSE-DSM-XS-GT?item=250353010803&category=33742&cmd=ViewItem","status": 4}, {"recordID": 540,"itemID": 250305887146,"userID": "phil","quantity": 980,"buyItNowPrice": 18.99,"currentPrice": 18.99,"startTime": "2008-10-08 12:41:47","title": "NXS MOTORSPORTS MANUAL BOOST CONTROLLER 1.8T TS STI MBC","description": null,"listingDuration": "GTC","listingType": "FixedPriceItem","stockControl": 0,"timeLeft": "P1DT15H53M4S","watchCount": 6,"questionCount": 0,"newLeadCount": 0,"galleryURL": "http://thumbs.ebaystatic.com/pict/2503058871466464_19.jpg","quantityAvailable": 943,"viewItemURL": "http://cgi.ebay.com/ebaymotors/NXS-MOTORSPORTS-MANUAL-BOOST-CONTROLLER-1-8T-TS-STI-MBC-/250305887146","viewItemURLForNaturalSearch": "http://cgi.ebay.com/ebaymotors/NXS-MOTORSPORTS-MANUAL-BOOST-CONTROLLER-1-8T-TS-STI-MBC?item=250305887146&category=33742&cmd=ViewItem","status": 4}, {"recordID": 541,"itemID": 250305913403,"userID": "phil","quantity": 950,"buyItNowPrice": 18.99,"currentPrice": 18.99,"startTime": "2008-10-08 13:37:32","title": "NXS MOTORSPORTS MANUAL BOOST CONTROLLER MBC TURBO CARS","description": null,"listingDuration": "GTC","listingType": "FixedPriceItem","stockControl": 0,"timeLeft": "P1DT16H48M49S","watchCount": 26,"questionCount": 40,"newLeadCount": 40,"galleryURL": "http://thumbs.ebaystatic.com/pict/2503059134036464_21.jpg","quantityAvailable": 729,"viewItemURL": "http://cgi.ebay.com/ebaymotors/NXS-MOTORSPORTS-MANUAL-BOOST-CONTROLLER-MBC-TURBO-CARS-/250305913403","viewItemURLForNaturalSearch": "http://cgi.ebay.com/ebaymotors/NXS-MOTORSPORTS-MANUAL-BOOST-CONTROLLER-MBC-TURBO-CARS?item=250305913403&category=33742&cmd=ViewItem","status": 4}, {"recordID": 542,"itemID": 260343228067,"userID": "phil","quantity": 1000,"buyItNowPrice": 18.99,"currentPrice": 18.99,"startTime": "2009-01-06 21:40:40","title": "NXS MANUAL BOOST CONTROLLER 300ZX GSX GST EVO MR2 MBC","description": null,"listingDuration": "GTC","listingType": "FixedPriceItem","stockControl": 0,"timeLeft": "P2DT1H51M57S","watchCount": 1,"questionCount": 5,"newLeadCount": 5,"galleryURL": "http://thumbs.ebaystatic.com/pict/2603432280676464_18.jpg","quantityAvailable": 948,"viewItemURL": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-300ZX-GSX-GST-EVO-MR2-MBC-/260343228067","viewItemURLForNaturalSearch": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-300ZX-GSX-GST-EVO-MR2-MBC?item=260343228067&category=33742&cmd=ViewItem","status": 4}, {"recordID": 543,"itemID": 250351868837,"userID": "phil","quantity": 1000,"buyItNowPrice": 18.99,"currentPrice": 18.99,"startTime": "2009-01-06 21:41:51","title": "NXS MANUAL BOOST CONTROLLER CELICA TURBO STI XS WRX MBC","description": null,"listingDuration": "GTC","listingType": "FixedPriceItem","stockControl": 0,"timeLeft": "P2DT1H53M8S","watchCount": 7,"questionCount": 3,"newLeadCount": 3,"galleryURL": "http://thumbs.ebaystatic.com/pict/2503518688376464_18.jpg","quantityAvailable": 947,"viewItemURL": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-CELICA-TURBO-STI-XS-WRX-MBC-/250351868837","viewItemURLForNaturalSearch": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-CELICA-TURBO-STI-XS-WRX-MBC?item=250351868837&category=33742&cmd=ViewItem","status": 4}, {"recordID": 552,"itemID": 251024565776,"userID": "phil","quantity": 1000,"buyItNowPrice": 40.94,"currentPrice": 40.94,"startTime": "2012-03-22 18:32:24","title": "NXS MOTORSPORTS - GREEN SIGNATURE SERIES MANUAL BOOST CONTROLLER-TURBO VALVE-MBC","description": null,"listingDuration": "GTC","listingType": "StoresFixedPrice","stockControl": 0,"timeLeft": "P2DT21H43M41S","watchCount": 4,"questionCount": 0,"newLeadCount": 0,"galleryURL": "http://thumbs.ebaystatic.com/pict/2510245657766464_2.jpg","quantityAvailable": 994,"viewItemURL": "http://cgi.ebay.com/ebaymotors/NXS-MOTORSPORTS-GREEN-SIGNATURE-SERIES-MANUAL-BOOST-CONTROLLER-TURBO-VALVE-MBC-/251024565776","viewItemURLForNaturalSearch": "http://cgi.ebay.com/ebaymotors/NXS-MOTORSPORTS-GREEN-SIGNATURE-SERIES-MANUAL-BOOST-CONTROLLER-TURBO-VALVE-MBC?item=251024565776&category=33742&cmd=ViewItem","status": 4}, {"recordID": 553,"itemID": 260986703371,"userID": "phil","quantity": 1000,"buyItNowPrice": 40.94,"currentPrice": 40.94,"startTime": "2012-03-22 18:33:50","title": "NXS MOTORSPORTS- SILVER SIGNATURE SERIES MANUAL BOOST CONTROLLER-TURBO VALVE-MBC","description": null,"listingDuration": "GTC","listingType": "StoresFixedPrice","stockControl": 0,"timeLeft": "P2DT21H45M7S","watchCount": 0,"questionCount": 0,"newLeadCount": 0,"galleryURL": "http://thumbs.ebaystatic.com/pict/2609867033716464_1.jpg","quantityAvailable": 987,"viewItemURL": "http://cgi.ebay.com/ebaymotors/NXS-MOTORSPORTS-SILVER-SIGNATURE-SERIES-MANUAL-BOOST-CONTROLLER-TURBO-VALVE-MBC-/260986703371","viewItemURLForNaturalSearch": "http://cgi.ebay.com/ebaymotors/NXS-MOTORSPORTS-SILVER-SIGNATURE-SERIES-MANUAL-BOOST-CONTROLLER-TURBO-VALVE-MBC?item=260986703371&category=33742&cmd=ViewItem","status": 4}, {"recordID": 554,"itemID": 250351872813,"userID": "phil","quantity": 1000,"buyItNowPrice": 18.99,"currentPrice": 18.99,"startTime": "2009-01-08 09:45:00","title": "NXS MANUAL BOOST CONTROLLER SUBARU WRX STI LEGACY SCION","description": null,"listingDuration": "GTC","listingType": "FixedPriceItem","stockControl": 0,"timeLeft": "P3DT13H56M17S","watchCount": 6,"questionCount": 9,"newLeadCount": 9,"galleryURL": "http://thumbs.ebaystatic.com/pict/2503518728136464_18.jpg","quantityAvailable": 917,"viewItemURL": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-SUBARU-WRX-STI-LEGACY-SCION-/250351872813","viewItemURLForNaturalSearch": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-SUBARU-WRX-STI-LEGACY-SCION?item=250351872813&category=33742&cmd=ViewItem","status": 4}, {"recordID": 555,"itemID": 261156929125,"userID": "phil","quantity": 1946,"buyItNowPrice": 31.94,"currentPrice": 31.94,"startTime": "2013-01-17 14:51:53","title": "NXS CUSTOM MANUAL BOOST CONTROLLER MBC & HOSE KIT DSM GSX GST WRX EVO STI BLACK","description": null,"listingDuration": "GTC","listingType": "StoresFixedPrice","stockControl": 0,"timeLeft": "P3DT19H3M10S","watchCount": 9,"questionCount": 0,"newLeadCount": 0,"galleryURL": "http://thumbs.ebaystatic.com/pict/2611569291256464_1.jpg","quantityAvailable": 1914,"viewItemURL": "http://cgi.ebay.com/ebaymotors/NXS-CUSTOM-MANUAL-BOOST-CONTROLLER-MBC-HOSE-KIT-DSM-GSX-GST-WRX-EVO-STI-BLACK-/261156929125","viewItemURLForNaturalSearch": "http://cgi.ebay.com/ebaymotors/NXS-CUSTOM-MANUAL-BOOST-CONTROLLER-MBC-HOSE-KIT-DSM-GSX-GST-WRX-EVO-STI-BLACK?item=261156929125&category=33742&cmd=ViewItem","status": 4}, {"recordID": 556,"itemID": 260341664149,"userID": "phil","quantity": 1000,"buyItNowPrice": 18.99,"currentPrice": 18.99,"startTime": "2009-01-08 16:45:00","title": "NXS MANUAL BOOST CONTROLLER BUICK GRAND NATIONAL T TYPE","description": null,"listingDuration": "GTC","listingType": "FixedPriceItem","stockControl": 0,"timeLeft": "P3DT20H56M17S","watchCount": 32,"questionCount": 9,"newLeadCount": 9,"galleryURL": "http://thumbs.ebaystatic.com/pict/2603416641496464_19.jpg","quantityAvailable": 848,"viewItemURL": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-BUICK-GRAND-NATIONAL-T-TYPE-/260341664149","viewItemURLForNaturalSearch": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-BUICK-GRAND-NATIONAL-T-TYPE?item=260341664149&category=33742&cmd=ViewItem","status": 4}, {"recordID": 557,"itemID": 250354443674,"userID": "phil","quantity": 1000,"buyItNowPrice": 18.99,"currentPrice": 18.99,"startTime": "2009-01-08 19:01:22","title": "NXS MANUAL BOOST CONTROLLER PONTIAC TURBO TRANS AM Z28","description": null,"listingDuration": "GTC","listingType": "FixedPriceItem","stockControl": 0,"timeLeft": "P3DT23H12M39S","watchCount": 6,"questionCount": 6,"newLeadCount": 6,"galleryURL": "http://thumbs.ebaystatic.com/pict/2503544436746464_18.jpg","quantityAvailable": 963,"viewItemURL": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-PONTIAC-TURBO-TRANS-AM-Z28-/250354443674","viewItemURLForNaturalSearch": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-PONTIAC-TURBO-TRANS-AM-Z28?item=250354443674&category=33742&cmd=ViewItem","status": 4}, {"recordID": 558,"itemID": 250351875689,"userID": "phil","quantity": 1000,"buyItNowPrice": 18.99,"currentPrice": 18.99,"startTime": "2009-01-09 12:15:00","title": "NXS MANUAL BOOST CONTROLLER GNX TOYOTA SUPRA CELICA GSR","description": null,"listingDuration": "GTC","listingType": "FixedPriceItem","stockControl": 0,"timeLeft": "P4DT16H26M17S","watchCount": 7,"questionCount": 2,"newLeadCount": 2,"galleryURL": "http://thumbs.ebaystatic.com/pict/2503518756896464_18.jpg","quantityAvailable": 938,"viewItemURL": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-GNX-TOYOTA-SUPRA-CELICA-GSR-/250351875689","viewItemURLForNaturalSearch": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-GNX-TOYOTA-SUPRA-CELICA-GSR?item=250351875689&category=33742&cmd=ViewItem","status": 4}, {"recordID": 559,"itemID": 251321266232,"userID": "phil","quantity": 1000,"buyItNowPrice": 24.94,"currentPrice": 24.94,"startTime": "2013-08-16 15:38:26","title": "NXS Motorsports Manual Boost Controller -Black- Unleash the power of your turbo!","description": null,"listingDuration": "GTC","listingType": "FixedPriceItem","stockControl": 0,"timeLeft": "P4DT18H49M43S","watchCount": 16,"questionCount": 1,"newLeadCount": 1,"galleryURL": "http://thumbs.ebaystatic.com/pict/2513212662326464_5.jpg","quantityAvailable": 954,"viewItemURL": "http://cgi.ebay.com/ebaymotors/NXS-Motorsports-Manual-Boost-Controller-Black-Unleash-power-your-turbo-/251321266232","viewItemURLForNaturalSearch": "http://cgi.ebay.com/ebaymotors/NXS-Motorsports-Manual-Boost-Controller-Black-Unleash-the-power-of-your-turbo?item=251321266232&category=33742&cmd=ViewItem","status": 4}, {"recordID": 565,"itemID": 260341665208,"userID": "phil","quantity": 1000,"buyItNowPrice": 18.99,"currentPrice": 18.99,"startTime": "2009-01-09 21:30:00","title": "NXS MANUAL BOOST CONTROLLER LS 2.4 3.0 VOLVO TURBO FORD","description": null,"listingDuration": "GTC","listingType": "FixedPriceItem","stockControl": 0,"timeLeft": "P5DT1H41M17S","watchCount": 12,"questionCount": 2,"newLeadCount": 2,"galleryURL": "http://thumbs.ebaystatic.com/pict/2603416652086464_17.jpg","quantityAvailable": 931,"viewItemURL": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-LS-2-4-3-0-VOLVO-TURBO-FORD-/260341665208","viewItemURLForNaturalSearch": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-LS-2-4-3-0-VOLVO-TURBO-FORD?item=260341665208&category=33742&cmd=ViewItem","status": 4}, {"recordID": 566,"itemID": 260359658363,"userID": "phil","quantity": 1027,"buyItNowPrice": 18.99,"currentPrice": 18.99,"startTime": "2009-02-08 23:44:33","title": "NXS MANUAL BOOST CONTROLLER 280Z TURBO WRX 240SX MBC S4","description": null,"listingDuration": "GTC","listingType": "FixedPriceItem","stockControl": 0,"timeLeft": "P5DT3H55M50S","watchCount": 3,"questionCount": 6,"newLeadCount": 6,"galleryURL": "http://thumbs.ebaystatic.com/pict/2603596583636464_16.jpg","quantityAvailable": 1002,"viewItemURL": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-280Z-TURBO-WRX-240SX-MBC-S4-/260359658363","viewItemURLForNaturalSearch": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-280Z-TURBO-WRX-240SX-MBC-S4?item=260359658363&category=33742&cmd=ViewItem","status": 4}, {"recordID": 567,"itemID": 250351879892,"userID": "phil","quantity": 1000,"buyItNowPrice": 18.99,"currentPrice": 18.99,"startTime": "2009-01-10 02:45:00","title": "NXS MANUAL BOOST CONTROLLER TURBO CHEVY GMC DODGE TRUCK","description": null,"listingDuration": "GTC","listingType": "FixedPriceItem","stockControl": 0,"timeLeft": "P5DT6H56M17S","watchCount": 1,"questionCount": 3,"newLeadCount": 3,"galleryURL": "http://thumbs.ebaystatic.com/pict/2503518798926464_17.jpg","quantityAvailable": 987,"viewItemURL": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-TURBO-CHEVY-GMC-DODGE-TRUCK-/250351879892","viewItemURLForNaturalSearch": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-TURBO-CHEVY-GMC-DODGE-TRUCK?item=250351879892&category=33742&cmd=ViewItem","status": 4}, {"recordID": 712,"itemID": 260341669060,"userID": "phil","quantity": 1000,"buyItNowPrice": 18.99,"currentPrice": 18.99,"startTime": "2009-01-10 15:45:00","title": "NXS MANUAL BOOST CONTROLLER HONDA ACCORD CIVIC PRELUDE","description": null,"listingDuration": "GTC","listingType": "FixedPriceItem","stockControl": 0,"timeLeft": "P5DT19H56M9S","watchCount": 0,"questionCount": 6,"newLeadCount": 6,"galleryURL": "http://thumbs.ebaystatic.com/pict/2603416690606464_17.jpg","quantityAvailable": 945,"viewItemURL": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-HONDA-ACCORD-CIVIC-PRELUDE-/260341669060","viewItemURLForNaturalSearch": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-HONDA-ACCORD-CIVIC-PRELUDE?item=260341669060&category=33742&cmd=ViewItem","status": 4}, {"recordID": 893,"itemID": 250351882869,"userID": "phil","quantity": 700,"buyItNowPrice": 18.99,"currentPrice": 18.99,"startTime": "2009-01-11 02:15:00","title": "NXS MANUAL BOOST CONTROLLER SKYLINE SILVIA R33 GTR GTS","description": null,"listingDuration": "GTC","listingType": "FixedPriceItem","stockControl": 0,"timeLeft": "P6DT6H25M59S","watchCount": 12,"questionCount": 0,"newLeadCount": 0,"galleryURL": "http://thumbs.ebaystatic.com/pict/2503518828696464_17.jpg","quantityAvailable": 637,"viewItemURL": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-SKYLINE-SILVIA-R33-GTR-GTS-/250351882869","viewItemURLForNaturalSearch": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-SKYLINE-SILVIA-R33-GTR-GTS?item=250351882869&category=33742&cmd=ViewItem","status": 4}, {"recordID": 894,"itemID": 250351883390,"userID": "phil","quantity": 1035,"buyItNowPrice": 18.99,"currentPrice": 18.99,"startTime": "2009-01-11 10:45:00","title": "NXS MANUAL BOOST CONTROLLER NISSAN S13 S14 S15 240 SX","description": null,"listingDuration": "GTC","listingType": "FixedPriceItem","stockControl": 0,"timeLeft": "P6DT14H55M59S","watchCount": 8,"questionCount": 4,"newLeadCount": 4,"galleryURL": "http://thumbs.ebaystatic.com/pict/2503518833906464_17.jpg","quantityAvailable": 931,"viewItemURL": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-NISSAN-S13-S14-S15-240-SX-/250351883390","viewItemURLForNaturalSearch": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-NISSAN-S13-S14-S15-240-SX?item=250351883390&category=33742&cmd=ViewItem","status": 4}, {"recordID": 895,"itemID": 250351883862,"userID": "phil","quantity": 910,"buyItNowPrice": 18.99,"currentPrice": 18.99,"startTime": "2009-01-11 17:30:00","title": "NXS MANUAL BOOST CONTROLLER 300ZX 180SX G37 240SX MBC","description": null,"listingDuration": "GTC","listingType": "FixedPriceItem","stockControl": 0,"timeLeft": "P6DT21H40M59S","watchCount": 6,"questionCount": 2,"newLeadCount": 2,"galleryURL": "http://thumbs.ebaystatic.com/pict/2503518838626464_17.jpg","quantityAvailable": 875,"viewItemURL": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-300ZX-180SX-G37-240SX-MBC-/250351883862","viewItemURLForNaturalSearch": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-300ZX-180SX-G37-240SX-MBC?item=250351883862&category=33742&cmd=ViewItem","status": 4}, {"recordID": 896,"itemID": 250351884221,"userID": "phil","quantity": 1000,"buyItNowPrice": 18.99,"currentPrice": 18.99,"startTime": "2009-01-12 00:00:00","title": "NXS MANUAL BOOST CONTROLLER SRT-4 NEON MAZDA RX7 RX8 GT","description": null,"listingDuration": "GTC","listingType": "FixedPriceItem","stockControl": 0,"timeLeft": "P7DT4H10M59S","watchCount": 4,"questionCount": 4,"newLeadCount": 4,"galleryURL": "http://thumbs.ebaystatic.com/pict/2503518842216464_17.jpg","quantityAvailable": 946,"viewItemURL": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-SRT-4-NEON-MAZDA-RX7-RX8-GT-/250351884221","viewItemURLForNaturalSearch": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-SRT-4-NEON-MAZDA-RX7-RX8-GT?item=250351884221&category=33742&cmd=ViewItem","status": 4}, {"recordID": 952,"itemID": 251028533930,"userID": "phil","quantity": 1000,"buyItNowPrice": 24.94,"currentPrice": 24.94,"startTime": "2012-03-27 16:26:46","title": "NXS SIGNATURE SERIES MANUAL BOOST CONTROLLER-TURBO - INCREASE HP - BLACK MBC-1/4","description": null,"listingDuration": "GTC","listingType": "StoresFixedPrice","stockControl": 0,"timeLeft": "P7DT19H37M45S","watchCount": 62,"questionCount": 13,"newLeadCount": 13,"galleryURL": "http://thumbs.ebaystatic.com/pict/2510285339306464_1.jpg","quantityAvailable": 720,"viewItemURL": "http://cgi.ebay.com/ebaymotors/NXS-SIGNATURE-SERIES-MANUAL-BOOST-CONTROLLER-TURBO-INCREASE-HP-BLACK-MBC-1-4-/251028533930","viewItemURLForNaturalSearch": "http://cgi.ebay.com/ebaymotors/NXS-SIGNATURE-SERIES-MANUAL-BOOST-CONTROLLER-TURBO-INCREASE-HP-BLACK-MBC-1-4?item=251028533930&category=33742&cmd=ViewItem","status": 4}, {"recordID": 953,"itemID": 260990722617,"userID": "phil","quantity": 1000,"buyItNowPrice": 40.94,"currentPrice": 40.94,"startTime": "2012-03-27 16:34:08","title": "NXS SIGNATURE SERIES MANUAL BOOST CONTROLLER-TURBO - INCREASE HP - GREEN MBC-1/4","description": null,"listingDuration": "GTC","listingType": "StoresFixedPrice","stockControl": 0,"timeLeft": "P7DT19H45M7S","watchCount": 2,"questionCount": 0,"newLeadCount": 0,"galleryURL": "http://thumbs.ebaystatic.com/pict/2609907226176464_1.jpg","quantityAvailable": 991,"viewItemURL": "http://cgi.ebay.com/ebaymotors/NXS-SIGNATURE-SERIES-MANUAL-BOOST-CONTROLLER-TURBO-INCREASE-HP-GREEN-MBC-1-4-/260990722617","viewItemURLForNaturalSearch": "http://cgi.ebay.com/ebaymotors/NXS-SIGNATURE-SERIES-MANUAL-BOOST-CONTROLLER-TURBO-INCREASE-HP-GREEN-MBC-1-4?item=260990722617&category=33742&cmd=ViewItem","status": 4}, {"recordID": 954,"itemID": 260990723984,"userID": "phil","quantity": 1000,"buyItNowPrice": 40.94,"currentPrice": 40.94,"startTime": "2012-03-27 16:36:01","title": "NXS SIGNATURE SERIES MANUAL BOOST CONTROLLER-TURBO - INCREASE HP -SILVER MBC-1/4","description": null,"listingDuration": "GTC","listingType": "StoresFixedPrice","stockControl": 0,"timeLeft": "P7DT19H47M","watchCount": 3,"questionCount": 1,"newLeadCount": 1,"galleryURL": "http://thumbs.ebaystatic.com/pict/2609907239846464_1.jpg","quantityAvailable": 990,"viewItemURL": "http://cgi.ebay.com/ebaymotors/NXS-SIGNATURE-SERIES-MANUAL-BOOST-CONTROLLER-TURBO-INCREASE-HP-SILVER-MBC-1-4-/260990723984","viewItemURLForNaturalSearch": "http://cgi.ebay.com/ebaymotors/NXS-SIGNATURE-SERIES-MANUAL-BOOST-CONTROLLER-TURBO-INCREASE-HP-SILVER-MBC-1-4?item=260990723984&category=33742&cmd=ViewItem","status": 4}, {"recordID": 1008,"itemID": 250308941402,"userID": "phil","quantity": 981,"buyItNowPrice": 18.99,"currentPrice": 18.99,"startTime": "2008-10-15 00:00:00","title": "NXS MANUAL BOOST CONTROLLER 280Z TURBO POD 240SX GAUGE","description": null,"listingDuration": "GTC","listingType": "FixedPriceItem","stockControl": 0,"timeLeft": "P8DT3H10M47S","watchCount": 12,"questionCount": 5,"newLeadCount": 5,"galleryURL": "http://thumbs.ebaystatic.com/pict/2503089414026464_19.jpg","quantityAvailable": 935,"viewItemURL": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-280Z-TURBO-POD-240SX-GAUGE-/250308941402","viewItemURLForNaturalSearch": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-280Z-TURBO-POD-240SX-GAUGE?item=250308941402&category=33742&cmd=ViewItem","status": 4}, {"recordID": 1009,"itemID": 260346334858,"userID": "phil","quantity": 1000,"buyItNowPrice": 18.99,"currentPrice": 18.99,"startTime": "2009-01-13 10:22:20","title": "NXS MANUAL BOOST CONTROLLER TURBO GAUGE GSX ECLIPSE POD","description": null,"listingDuration": "GTC","listingType": "FixedPriceItem","stockControl": 0,"timeLeft": "P8DT14H33M7S","watchCount": 8,"questionCount": 14,"newLeadCount": 14,"galleryURL": "http://thumbs.ebaystatic.com/pict/2603463348586464_16.jpg","quantityAvailable": 906,"viewItemURL": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-TURBO-GAUGE-GSX-ECLIPSE-POD-/260346334858","viewItemURLForNaturalSearch": "http://cgi.ebay.com/ebaymotors/NXS-MANUAL-BOOST-CONTROLLER-TURBO-GAUGE-GSX-ECLIPSE-POD?item=260346334858&category=33742&cmd=ViewItem","status": 4}];

        // $scope.gridOptions = {
        //     data: 'myData',
        //     multiSelect: false,
        //     enablePaging: true,
        //     showFooter: true,
        //     totalServerItems: 'totalServerItems',
        //     pagingOptions: $scope.pagingOptions,
        //     filterOptions: $scope.filterOptions,
        //     selectedItems: $scope.mySelections,
        //     afterSelectionChange: function(rowItem) {
        //         if (rowItem.selected) {
        //             $state.go("manage.item", {
        //                 id: $scope.mySelections[0].itemID
        //             });
        //             //alert($scope.mySelections[0].itemID);
        //         }
        //     },
        //     columnDefs: [{
        //         field: 'itemID',
        //         displayName: 'itemID',
        //         width: '10%'
        //     }, {
        //         field: 'title',
        //         displayName: 'title',
        //         width: '60%'
        //     }, {
        //         displayName: 'Actions',
        //         width: '20%',
        //         field: 'itemID',
        //         cellTemplate:
        //         //    '<div class="grid-action-cell">'+
        //         //    '<a ng-click="$event.stopPropagation(); deleteThisRow(row.entity);" href="#">Delete</a></div>'
        //             '<div class="ngCellText" ng-class="col.colIndex()"> \
        //         <a ui-sref="manage.item.edit({id: COL_FIELD})" class="btn btn-default btn-xs" title="edit"><span class="glyphicon glyphicon-pencil"></a> \
        //         <a ui-sref="manage.item.stats({id: COL_FIELD})" class="btn btn-info btn-xs" title="view stats"><span class="glyphicon glyphicon-stats"></a> \
        //         <a ui-sref="manage.item.quantity({id: COL_FIELD})" class="btn btn-primary btn-xs" title="modify inventory"><span class="glyphicon glyphicon-th"></a> \
        //         <a ui-sref="manage.item.price({id: COL_FIELD})" class="btn btn-success btn-xs" title="modify price"><span class="glyphicon glyphicon-usd"></a> \
        //         <a ui-sref="manage.item.pics({id: COL_FIELD})" class="btn btn-warning btn-xs" title="modify pictures"><span class="glyphicon glyphicon-picture"></a> \
        //         <a ui-sref="manage.item.end({id: COL_FIELD})" class="btn btn-danger btn-xs" title="delete/end"><span class="glyphicon glyphicon-remove"></a> \
        //         </div>'
        //     }]

        // };

        // $scope.master = {};

        // $scope.update = function(user) {
        //     $scope.master = angular.copy(user);
        // };

        // $scope.reset = function() {
        //     $scope.user = angular.copy($scope.master);
        // };

        // $scope.reset();


        //new from here         $state.current.data.myData = $scope.myData;
        $scope.items = [];
        $scope.mySelections = [];
        //$state.current.data.myData = $scope.items;
        // filter
        $scope.filterOptions = {
            filterText: "",
            useExternalFilter: true
        };

        // paging
        $scope.totalServerItems = 0;
        $scope.pagingOptions = {
            pageSizes: [10, 25, 50, 100],
            pageSize: 25,
            currentPage: 1
        };

        // sort
        $scope.sortOptions = {
            fields: ["name"],
            directions: ["ASC"]
        };

        // grid
        $scope.gridOptions = {
            data: "items",
            columnDefs: [{
                field: "itemID",
                displayName: "itemID"
            }, {
                field: "title",
                displayName: "title"
            }, {
                field: "currentPrice",
                displayName: "price"
            }, {
                field: "quantityAvailable",
                displayName: "quantityAvailable"
            }, {
                field: "quantity",
                displayName: "quantity"
            }, {
                displayName: 'Actions',
                width: '20%',
                field: 'itemID',
                cellTemplate:
                //    '<div class="grid-action-cell">'+
                //    '<a ng-click="$event.stopPropagation(); deleteThisRow(row.entity);" href="#">Delete</a></div>'
                    '<div class="ngCellText" ng-class="col.colIndex()"> \
                <a ui-sref="manage.item.edit({id: COL_FIELD})" class="btn btn-default btn-xs" title="edit"><span class="glyphicon glyphicon-pencil"></a> \
                <a ui-sref="manage.item.stats({id: COL_FIELD})" class="btn btn-info btn-xs" title="view stats"><span class="glyphicon glyphicon-stats"></a> \
                <a ui-sref="manage.item.quantity({id: COL_FIELD})" class="btn btn-primary btn-xs" title="modify inventory"><span class="glyphicon glyphicon-th"></a> \
                <a ui-sref="manage.item.price({id: COL_FIELD})" class="btn btn-success btn-xs" title="modify price"><span class="glyphicon glyphicon-usd"></a> \
                <a ui-sref="manage.item.pics({id: COL_FIELD})" class="btn btn-warning btn-xs" title="modify pictures"><span class="glyphicon glyphicon-picture"></a> \
                <a ui-sref="manage.item.end({id: COL_FIELD})" class="btn btn-danger btn-xs" title="delete/end"><span class="glyphicon glyphicon-remove"></a> \
                </div>'
            }],
            enablePaging: true,
            pagingOptions: $scope.pagingOptions,
            enableColumnResize: true,
            filterOptions: $scope.filterOptions,
            keepLastSelected: true,
            multiSelect: false,
            selectedItems: $scope.mySelections,
            showFooter: true,
            sortInfo: $scope.sortOptions,
            totalServerItems: "totalServerItems",
            useExternalSorting: false,
            afterSelectionChange: function(rowItem) {
                if (rowItem.selected) {
                    $state.go("manage.item", {
                        id: $scope.mySelections[0].itemID
                    });
                    //alert($scope.mySelections[0].itemID);
                }
            },
            i18n: "en"
        };



        $scope.refresh = function() {
            setTimeout(function() {
                var sb = [];
                for (var i = 0; i < $scope.sortOptions.fields.length; i++) {
                    sb.push($scope.sortOptions.directions[i] === "DESC" ? "-" : "+");
                    sb.push($scope.sortOptions.fields[i]);
                }

                // var p = {
                //     search: $scope.filterOptions.filterText,
                //     limit: $scope.pagingOptions.pageSize,
                //     offset: $scope.pagingOptions.currentPage,
                //     order: sb.join("")
                // };
                // name: $scope.filterOptions.filterText,
                // pageNumber: $scope.pagingOptions.currentPage,
                // pageSize: $scope.pagingOptions.pageSize,
                // sortInfo: sb.join("")

                //alert(JSON.stringify(listings.items));
                //$scope.totalServerItems = listings.total;
                //$scope.items = listings.items;
                //
                //
                //
                //

                $scope.ebayListings = EbayListings.EbayListings.get({
                    search: $scope.filterOptions.filterText,
                    limit: $scope.pagingOptions.pageSize,
                    offset: $scope.pagingOptions.currentPage
                }, function() {

                    console.log($scope.ebayListings);

                    //cope.ebayListings = EbayListings;
                    $scope.totalServerItems = $scope.ebayListings.total;
                    $scope.items = $scope.ebayListings.items;

                });



                // $http({
                //     url: "http://replacedomain.com/siliconehose/functions/resourceJson.php",
                //     method: "GET",
                //     params: p
                // }).success(function(data, status, headers, config) {
                //     $scope.totalServerItems = data.total;
                //     $scope.items = data.items;

                //     // if ($scope.totalServerItems < ($scope.pagingOptions.currentPage * data.items.length)) {

                //     //   alert('w');
                //     //   $scope.pagingOptions.currentPage = 1;
                //     // }

                //     //console.log(JSON.stringify(url));
                // }).error(function(data, status, headers, config) {
                //     alert(JSON.stringify(status));
                // });
            }, 100);
        };
        //$state.current.data.myData = $scope.myData = $scope.items;
        // watches
        // 
        // 
        // 


        $scope.$watch('pagingOptions', function(newVal, oldVal) {
            if (newVal !== oldVal) {
                console.log(newVal);
                // if ($scope.totalServerItems < (($scope.pagingOptions.currentPage * $scope.ebayListings.items.length) - $scope.ebayListings.items.length)) {

                //     alert(($scope.pagingOptions.currentPage * $scope.ebayListings.items.length) - $scope.ebayListings.items.length);
                //     $scope.pagingOptions.currentPage = 1;
                // }
                $scope.refresh();
            }
        }, true);

        $scope.$watch('filterOptions', function(newVal, oldVal) {
            if (newVal !== oldVal) {
                console.log(newVal);
                $scope.pagingOptions.currentPage = 1;
                $scope.refresh();
                //$scope.pagingOptions.currentPage = 1;
            }
        }, true);

        $scope.$watch('sortOptions', function(newVal, oldVal) {
            if (newVal !== oldVal) {
                console.log(newVal);
                //$scope.pagingOptions.currentPage = 1;
                $scope.refresh();
            }
        }, true);

        // $scope.$watch('pagingOptions', function(newVal, oldVal) {
        //     if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
        //         $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
        //     }
        // }, true);
        // $scope.$watch('filterOptions', function(newVal, oldVal) {
        //     if (newVal !== oldVal) {
        //         $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
        //     }
        // }, true);

        $scope.refresh();

        //console.log("hey yo" + JSON.stringify(EbayListings.query()));
    });
