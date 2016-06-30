'use strict';

angular.module('shopnxApp')
  .config(function ($stateProvider) {
  	
    $stateProvider
      .state('main', {
        title: 'Aardath Online Store',
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        params: {
          sort: null
        }
      })

       .state('mainmp', {
        title: 'Aardath Market Place',
        url: '/mainmp',
        templateUrl: 'app/main/mainmp.html',
        controller: 'MainMPCtrl',
        params: {
          sort: null
        }
      })

       .state('mainoi', {
        title: 'Aardath Order IN',
        url: '/mainoi',
        templateUrl: 'app/main/main.html',
        controller: 'MainOICtrl',
        params: {
          sort: null
        }
      })

       .state('maintng', {
        title: 'Aardath Ticketing ',
        url: '/maintng',
        templateUrl: 'app/main/maintng.html',
        controller: 'MainTNGCtrl',
        params: {
          sort: null
        }
      })
      .state('productDetail', {
        title: 'Details of selected product',
        params: {
          id: null,
          slug: null
        },
        url: '/p/:slug',
        templateUrl: 'app/main/product-details.html',
        controller: 'ProductDetailsCtrl'
      })
      .state('SubProduct', {
        title: 'All products under current category or brand',
        url: '/:page/:slug/:_id',
        templateUrl: 'app/main/category.html',
        controller: 'CategoryCtrl',
        params: {
          id: null,
          sort: null,
          brand: null,
          category: null,
          price1: 0,
          price2: 100000,
          page:null,
          _id:null,
          slug:null
        }
      });
  });
