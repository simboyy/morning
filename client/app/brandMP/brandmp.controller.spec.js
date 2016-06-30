'use strict';

describe('Controller: BrandMPCtrl', function () {

  // load the controller's module
  beforeEach(module('shopnxApp'));

  var BrandMPCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BrandMPCtrl = $controller('BrandMPCtrl', {
      $scope: scope
    });
  }));
  // 
  // it('should ...', function () {
  //   expect(true).toBe(true);
  // });
});
