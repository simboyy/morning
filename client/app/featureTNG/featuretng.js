'use strict';

angular.module('shopnxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('featuretng', {
        url: '/featuretng',
        templateUrl: 'app/featureTNG/featuretng.html',
        controller: 'FeatureTNGCtrl'
      });
  });