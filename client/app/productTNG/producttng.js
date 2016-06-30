'use strict';

angular.module('shopnxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('producttng', {
        title: 'Products administration (Add, Remove, Edit)',
        url: '/producttng',
        templateUrl: 'app/productTNG/producttng.html',
        controller: 'ProductTNGCtrl',
        authenticate: true
      });
  });
