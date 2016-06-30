'use strict';

angular.module('shopnxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('brandoi', {
        title: 'Add, Remove, Edit Brands',
        url: '/brandoi',
        templateUrl: 'app/brandoi/brandoi.html',
        controller: 'BrandOICtrl',
        authenticate: true
      });
  });
