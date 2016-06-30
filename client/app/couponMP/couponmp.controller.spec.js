'use strict';

describe('Controller: CouponMPCtrl', function () {

  // load the controller's module
  beforeEach(module('shopnxApp'));

  var CouponMPCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CouponMPCtrl = $controller('CouponMPCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
