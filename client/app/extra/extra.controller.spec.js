'use strict';

describe('Controller: ExtraCtrl', function () {

  // load the controller's module
  beforeEach(module('listingManagerApp'));

  var ExtraCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExtraCtrl = $controller('ExtraCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
