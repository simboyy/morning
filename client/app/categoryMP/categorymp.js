'use strict';

angular.module('shopnxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('categorymp', {
        title: 'Add, Remove, Edit categories',
        url: '/categorymp',
        templateUrl: 'app/categorymp/categorymp.html',
        controller: 'CategoryMPCtrl',
        authenticate: true
      });
  });
