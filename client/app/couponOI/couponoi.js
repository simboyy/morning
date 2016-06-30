'use strict';

angular.module('shopnxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('couponoi', {
        title: 'Manage your shop coupons',
        url: '/couponoi',
        templateUrl: 'app/couponOI/couponoi.html',
        controller: 'CouponOICtrl'
      });
  });
