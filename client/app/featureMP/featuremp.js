'use strict';

angular.module('shopnxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('featuremp', {
        url: '/featuremp',
        templateUrl: 'app/featureMP/featuremp.html',
        controller: 'FeatureMPCtrl'
      });
  });