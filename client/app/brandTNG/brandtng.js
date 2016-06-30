'use strict';

angular.module('shopnxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('brandtng', {
        title: 'Add, Remove, Edit Brands',
        url: '/brandtng',
        templateUrl: 'app/brandtng/brandtng.html',
        controller: 'BrandTNGCtrl',
        authenticate: true
      });
  });
