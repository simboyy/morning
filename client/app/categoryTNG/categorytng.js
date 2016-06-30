'use strict';

angular.module('shopnxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('categorytng', {
        title: 'Add, Remove, Edit categories',
        url: '/categorytng',
        templateUrl: 'app/categoryTNG/categorytng.html',
        controller: 'CategoryTNGCtrl',
        authenticate: true
      });
  });
