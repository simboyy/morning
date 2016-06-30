'use strict';

describe('Controller: OrderMPCtrl', function () {

  // load the controller's module
  beforeEach(module('shopnxApp'));

  var OrderMPCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrderMPCtrl = $controller('OrderMPCtrl', {
      $scope: scope
    });
  }));

});
