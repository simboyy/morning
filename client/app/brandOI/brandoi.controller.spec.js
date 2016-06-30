'use strict';

describe('Controller: BrandOICtrl', function () {

  // load the controller's module
  beforeEach(module('shopnxApp'));

  var BrandOICtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BrandOICtrl = $controller('BrandOICtrl', {
      $scope: scope
    });
  }));
  // 
  // it('should ...', function () {
  //   expect(true).toBe(true);
  // });
});
