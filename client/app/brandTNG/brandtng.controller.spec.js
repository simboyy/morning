'use strict';

describe('Controller: BrandCtrl', function () {

  // load the controller's module
  beforeEach(module('shopnxApp'));

  var BrandTNGCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BrandTNGCtrl = $controller('BrandTNGCtrl', {
      $scope: scope
    });
  }));
  // 
  // it('should ...', function () {
  //   expect(true).toBe(true);
  // });
});
