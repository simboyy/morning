'use strict';

angular.module('shopnxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('productoi', {
        title: 'Products administration (Add, Remove, Edit)',
        url: '/productoi',
        templateUrl: 'app/productOI/productoi.html',
        controller: 'ProductOICtrl',
        authenticate: true
      });
  });
