'use strict';

describe('Controller: FeatureOICtrl', function () {

  // load the controller's module
  beforeEach(module('shopnxApp'));

  var FeatureOICtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FeatureOICtrl = $controller('FeatureOICtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
