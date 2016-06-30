'use strict';

angular.module('shopnxApp')
  .controller('OrderOICtrl', function ($scope, OrderOI, toastr) {
    $scope.orderStatusLov = OrderOI.status;
    $scope.orders = OrderOI.my.query({},function(res){
      var total=0;
      // for(var i=0;i<res.length;i++){
      //     var subTotal = 0;
          for(var j=0;j<res.length;j++){
          // console.log();
              // subTotal += res[i].shipping.charge;
              total += res[j].shipping.total;
          }
          res.total = total;
          console.log(total);
      // }
      // res.total = total;
    });
    $scope.changeStatus = function(order){
      OrderOI.update({ id:order._id }, order).$promise.then(function(res) {
        console.log(res);
      }, function(error) { // error handler
        console.log(error);
        if(error.data.errors){
          var err = error.data.errors;
          toastr.error(err[Object.keys(err)].message,err[Object.keys(err)].name);
        }
        else{
          var msg = error.data.message;
          toastr.error(msg);
        }
      });
    };
  });
