'use strict';

angular.module('shopnxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('categoryoi', {
        title: 'Add, Remove, Edit categories',
        url: '/categoryoi',
        templateUrl: 'app/categoryoi/categoryoi.html',
        controller: 'CategoryOICtrl',
        authenticate: true
      });
  });
