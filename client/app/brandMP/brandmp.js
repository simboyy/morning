'use strict';

angular.module('shopnxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('brandmp', {
        title: 'Add, Remove, Edit Brands',
        url: '/brandmp',
        templateUrl: 'app/brandmp/brandmp.html',
        controller: 'BrandMPCtrl',
        authenticate: true
      });
  });
