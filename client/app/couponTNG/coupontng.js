'use strict';

angular.module('shopnxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('coupontng', {
        title: 'Manage your shop coupons',
        url: '/coupontng',
        templateUrl: 'app/couponTNG/coupontng.html',
        controller: 'CouponTNGCtrl'
      });
  });
