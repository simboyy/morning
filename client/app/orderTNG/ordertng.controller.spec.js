'use strict';

describe('Controller: OrderTNGCtrl', function () {

  // load the controller's module
  beforeEach(module('shopnxApp'));

  var OrderTNGCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrderTNGCtrl = $controller('OrderTNGCtrl', {
      $scope: scope
    });
  }));

});
