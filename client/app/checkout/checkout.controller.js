'use strict';

angular.module('shopnxApp')
  .controller('CheckoutCtrl', function ($scope, Order, PaymentMethod, Shipping, Coupon, Country,Suburb) {
      $scope.msg = 'No items in cart.';
      $scope.customer = {};
      $scope.coupon = {};


     Suburb.active.query().$promise.then(function(res){
        $scope.suburbs = res;
        console.log(res);
        
      });

  	 Country.active.query().$promise.then(function(res){
        $scope.countries = res;
        $scope.customer.country = {"name":"Zimbabwe","dial_code":"+263","code":"ZW"};
        console.log(res);
        
      });


      PaymentMethod.active.query().$promise.then(function(res){
        $scope.paymentMethods = res;
        $scope.customer.paymentMethod = res[0];
        // $scope.customer.paymentMethod.options = {shipping : 100};
      });

      Shipping.best.query({country:'Zimbabwe', active:true},function(res){
        $scope.shipping = res;
        $scope.cart.getTotalPriceAfterShipping(res, $scope.couponAmount);
      });

      // Setting the default country on page load
      $scope.calculateShipping = function(country){
        Shipping.best.query({country:country.name, active:true},function(res){
          $scope.shipping = res;
          console.log(res);
          $scope.cart.getTotalPriceAfterShipping(res, $scope.couponAmount);
        });
      };

      $scope.placeOrder = function(cart,shipping){

      	
        var data = {phone:$scope.customer.phone, name:$scope.customer.name, address:$scope.customer.address, city:$scope.customer.city, payment:'Pending', items:cart, shipping:shipping};
        Order.save(data);
        $scope.msg = 'Processing Payment ...';
      };

      // $scope.removeCoupon = function(){
      //   $scope.coupon = {};
      // };
      $scope.checkCoupon = function(code, cartValue){
        var x = {};
        // x.where is required else it adds unneccessery colons which can not be parsed by the JSON parser at the Server
        x.where = {code:code,active:true,'minimumCartValue' : { $lte: cartValue } };

        Coupon.query(x, function(res){
          $scope.coupon = res[0];
        });

      };
  });
