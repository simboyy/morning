'use strict';

angular.module('shopnxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('orderoi', {
        title: 'Orders placed in recent past',
        url: '/orderoi',
        templateUrl: 'app/orderOI/orderoi.html',
        controller: 'OrderOICtrl',
        authenticate: true
      });
  });
