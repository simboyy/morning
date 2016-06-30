'use strict';

angular.module('shopnxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('featureoi', {
        url: '/featureoi',
        templateUrl: 'app/featureOI/featureoi.html',
        controller: 'FeatureOICtrl'
      });
  });