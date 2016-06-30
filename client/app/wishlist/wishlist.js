'use strict';

angular.module('shopnxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('wishlist', {
        title: 'Details of items in your wishlist',
        url: '/wishlist',
        templateUrl: 'app/wishlist/wishlist.html'
        // controller: 'CartCtrl'
      });
  });
