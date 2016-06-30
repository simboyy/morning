'use strict';

describe('Controller: ProductTNGCtrl', function () {

  // load the controller's module
  beforeEach(module('shopnxApp'));

  var ProductTNGCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductTNGCtrl = $controller('ProductTNGCtrl', {
      $scope: scope
    });
  }));

});
