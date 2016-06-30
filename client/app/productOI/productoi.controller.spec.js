'use strict';

describe('Controller: ProductOICtrl', function () {

  // load the controller's module
  beforeEach(module('shopnxApp'));

  var ProductOICtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductOICtrl = $controller('ProductOICtrl', {
      $scope: scope
    });
  }));

});
