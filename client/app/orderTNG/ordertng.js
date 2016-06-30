'use strict';

angular.module('shopnxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ordertng', {
        title: 'Orders placed in recent past',
        url: '/ordertng',
        templateUrl: 'app/orderTNG/ordertng.html',
        controller: 'OrderTNGCtrl',
        authenticate: true
      });
  });
