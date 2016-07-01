'use strict';

angular.module('shopnxApp')
// Sample factory (dummy)
  .factory('factory', [function () {
    var somValue = 42;
    return {
      someMethod: function () {
        return somValue;
      }
    };
  }])


  ///product for Online shop ,Market Place ,Order In ,Ticketing
  .factory('Product', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/products/:id', null, {'update': { method:'PUT' } });
    obj.count = $resource('/api/products/count', null, {'update': { method:'PUT' }});
    return obj;
  }])

  .factory('ProductMP', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/productsmp/:id', null, {'update': { method:'PUT' } });
    obj.count = $resource('/api/productsmp/count', null, {'update': { method:'PUT' }});
    return obj;
  }])

  .factory('ProductOI', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/productsoi/:id', null, {'update': { method:'PUT' } });
    obj.count = $resource('/api/productsoi/count', null, {'update': { method:'PUT' }});
    return obj;
  }])

  .factory('ProductTNG', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/productstng/:id', null, {'update': { method:'PUT' } });
    obj.count = $resource('/api/productstng/count', null, {'update': { method:'PUT' }});
    return obj;
  }])


///shipping for all modules

  .factory('Shipping', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/shippings/:id', null, {'update': { method:'PUT' } });
    obj.best = $resource('/api/shippings/best', null, {'update': { method:'PUT' }});
    return obj;
  }])

//sorting criteria all modules
  .factory('SortOptions', [function() {
    var obj = {};
    obj.server= [
       {name:'Low Price', val:{'variants.price':1}},
       {name:'Hign Price', val:{'variants.price':-1}},
       {name:'Name (A-Z)', val:{'name':1}},
       {name:'Name (Z-A)', val:{'name':-1}}
    ];
    obj.client= [
       {name:'Price Asc', val:'variants[0].price'},
       {name:'Price Desc', val:'-variants[0].price'},
       {name:'Name Asc', val:'name'},
       {name:'Name Desc', val:'-name'}
    ];
    return obj;
  }])

  //Categories for Online Shopping ,Markert Place,Order In ,Ticketing

  .factory('Category', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/category/:id', null, {'update': { method:'PUT' }});
    obj.parent = $resource('/api/category/parent/:id', null, {'update': { method:'PUT' }});
    obj.category = $resource('/api/category/category/:id', null, {'update': { method:'PUT' }});
    obj.all = $resource('/api/category/all', null, {'update': { method:'PUT' }});
    return obj;
  }])

  .factory('CategoryMP', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/categorymp/:id', null, {'update': { method:'PUT' }});
    obj.parent = $resource('/api/categorymp/parent/:id', null, {'update': { method:'PUT' }});
    obj.category = $resource('/api/categorymp/categorymp/:id', null, {'update': { method:'PUT' }});
    obj.all = $resource('/api/categorymp/all', null, {'update': { method:'PUT' }});
    return obj;
  }])

  .factory('CategoryOI', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/categoryoi/:id', null, {'update': { method:'PUT' }});
    obj.parent = $resource('/api/categoryoi/parent/:id', null, {'update': { method:'PUT' }});
    obj.category = $resource('/api/categoryoi/categoryoi/:id', null, {'update': { method:'PUT' }});
    obj.all = $resource('/api/categoryoi/all', null, {'update': { method:'PUT' }});
    return obj;
  }])

  .factory('CategoryTNG', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/categorytng/:id', null, {'update': { method:'PUT' }});
    obj.parent = $resource('/api/categorytng/parent/:id', null, {'update': { method:'PUT' }});
    obj.category = $resource('/api/categorytng/categorytng/:id', null, {'update': { method:'PUT' }});
    obj.all = $resource('/api/categorytng/all', null, {'update': { method:'PUT' }});
    return obj;
  }])


  .factory('Country', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/countries/:id', null, {'update': { method:'PUT' }});
    obj.active = $resource('/api/countries', null, {'update': { method:'PUT' }});
     obj.all = $resource('/api/countriese', null, {'update': { method:'PUT' }});
    return obj;
  }])

  .factory('Suburb', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/suburbs/:id', null, {'update': { method:'PUT' }});
    obj.active = $resource('/api/suburbs', null, {'update': { method:'PUT' }});
     obj.all = $resource('/api/suburbs', null, {'update': { method:'PUT' }});
    return obj;
  }])
  .factory('Brand', ['$resource', function($resource) {
     var obj = {};

    obj = $resource('/api/brands/:id', null, {'update': { method:'PUT' } });
    obj.category = $resource('/api/brands/category/:id', null, {'update': { method:'PUT' }});
    obj.all = $resource('/api/brands/all', null, {'update': { method:'PUT' }});
    return obj;

    return 
  }])


  .factory('BrandMP', ['$resource', function($resource) {
     var obj = {};

    obj = $resource('/api/brandsmp/:id', null, {'update': { method:'PUT' } });
    obj.category = $resource('/api/brandsmp/categorymp/:id', null, {'update': { method:'PUT' }});
    obj.all = $resource('/api/brandsmp/all', null, {'update': { method:'PUT' }});
    return obj;

    return 
  }])

  .factory('BrandOI', ['$resource', function($resource) {
     var obj = {};

    obj = $resource('/api/brandsoi/:id', null, {'update': { method:'PUT' } });
    obj.category = $resource('/api/brandsoi/categoryoi/:id', null, {'update': { method:'PUT' }});
    obj.all = $resource('/api/brandsoi/all', null, {'update': { method:'PUT' }});
    return obj;

    return 
  }])
//coupon  for Online Shopping ,Markert Place,Order In ,Ticketing

  .factory('Coupon', ['$resource', function($resource) {
    return $resource('/api/coupons/:id', null, {'update': { method:'PUT' } });
  }])

  .factory('CouponMP', ['$resource', function($resource) {
    return $resource('/api/couponsmp/:id', null, {'update': { method:'PUT' } });
  }])

  .factory('CouponOI', ['$resource', function($resource) {
    return $resource('/api/couponsoi/:id', null, {'update': { method:'PUT' } });
  }])

  .factory('CouponTNG', ['$resource', function($resource) {
    return $resource('/api/couponstng/:id', null, {'update': { method:'PUT' } });
  }])
  // .factory('Shipping', ['$resource', function($resource) {
  //   return $resource('/api/shippings/:id', null, {'update': { method:'PUT' } });
  // }])
  .factory('Feature', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/features/:id', null, {'update': { method:'PUT' } });
    obj.group = $resource('/api/features/group', null, {'update': { method:'PUT' }});
    return obj;
  }])
  .factory('PaymentMethod', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/PaymentMethods/:id', null, {'update': { method:'PUT' } });
    obj.active = $resource('/api/PaymentMethods/active', null, {'update': { method:'PUT' }});
    return obj;
  }])
  .factory('Customer', ['$resource', function($resource) {
    return $resource('/api/customers/:id', null, {'update': { method:'PUT' } });
  }])
  .factory('Setting', ['$resource', function($resource) {
    return $resource('/api/settings/:id', null, {'update': { method:'PUT' } });
  }])
  .factory('Order', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/orders/:id', null, {'update': { method:'PUT' } });
    obj.my = $resource('/api/orders/my', null, {'update': { method:'PUT' }});
    obj.status = [
      {name:'Pending Payment', val:402},
      {name:'Order Placed', val:201},
      {name:'Order Accepted', val:202},
      {name:'Order Executed', val:302},
      {name:'Shipped', val:200},
      {name:'Delivered', val:200},
      {name:'Cancelled', val:204},
      {name:'Not in Stock', val:404}
    ];
    return obj;
  }])

  //orders for Online Shop,Market Place ,Order In ,Ticketing;

  .factory('OrderMP', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/ordersmp/:id', null, {'update': { method:'PUT' } });
    obj.my = $resource('/api/ordersmp/my', null, {'update': { method:'PUT' }});
    obj.status = [
      {name:'Pending Payment', val:402},
      {name:'Order Placed', val:201},
      {name:'Order Accepted', val:202},
      {name:'Order Executed', val:302},
      {name:'Shipped', val:200},
      {name:'Delivered', val:200},
      {name:'Cancelled', val:204},
      {name:'Not in Stock', val:404}
    ];
    return obj;
  }])

  .factory('OrderOI', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/ordersoi/:id', null, {'update': { method:'PUT' } });
    obj.my = $resource('/api/ordersoi/my', null, {'update': { method:'PUT' }});
    obj.status = [
      {name:'Pending Payment', val:402},
      {name:'Order Placed', val:201},
      {name:'Order Accepted', val:202},
      {name:'Order Executed', val:302},
      {name:'Shipped', val:200},
      {name:'Delivered', val:200},
      {name:'Cancelled', val:204},
      {name:'Not in Stock', val:404}
    ];
    return obj;
  }])

  .factory('OrderTNG', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/orderstng/:id', null, {'update': { method:'PUT' } });
    obj.my = $resource('/api/orderstng/my', null, {'update': { method:'PUT' }});
    obj.status = [
      {name:'Pending Payment', val:402},
      {name:'Order Placed', val:201},
      {name:'Order Accepted', val:202},
      {name:'Order Executed', val:302},
      {name:'Shipped', val:200},
      {name:'Delivered', val:200},
      {name:'Cancelled', val:204},
      {name:'Not in Stock', val:404}
    ];
    return obj;
  }]);
