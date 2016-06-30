'use strict';

angular.module('shopnxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('productmp', {
        title: 'Products administration (Add, Remove, Edit)',
        url: '/productmp',
        templateUrl: 'app/productMP/productmp.html',
        controller: 'ProductMPCtrl',
        authenticate: true
      });
  });
