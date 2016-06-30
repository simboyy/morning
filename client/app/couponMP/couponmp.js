'use strict';

angular.module('shopnxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('couponmp', {
        title: 'Manage your shop coupons',
        url: '/couponmp',
        templateUrl: 'app/couponMP/couponmp.html',
        controller: 'CouponMPCtrl'
      });
  });
