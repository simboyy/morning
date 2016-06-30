'use strict';

describe('Controller: ProductMPCtrl', function () {

  // load the controller's module
  beforeEach(module('shopnxApp'));

  var ProductMPCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductMPCtrl = $controller('ProductMPCtrl', {
      $scope: scope
    });
  }));

});
