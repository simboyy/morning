'use strict';

angular.module('shopnxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ordermp', {
        title: 'Orders placed in recent past',
        url: '/ordermp',
        templateUrl: 'app/orderMP/ordermp.html',
        controller: 'OrderMPCtrl',
        authenticate: true
      });
  });
