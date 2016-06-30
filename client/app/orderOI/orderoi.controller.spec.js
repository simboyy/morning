'use strict';

describe('Controller: OrderOICtrl', function () {

  // load the controller's module
  beforeEach(module('shopnxApp'));

  var OrderOICtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrderOICtrl = $controller('OrderOICtrl', {
      $scope: scope
    });
  }));

});
