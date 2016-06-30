'use strict';

describe('Controller: FeatureMPCtrl', function () {

  // load the controller's module
  beforeEach(module('shopnxApp'));

  var FeatureMPCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FeatureMPCtrl = $controller('FeatureMPCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
