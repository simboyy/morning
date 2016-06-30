'use strict';

angular.module('shopnxApp')
  .controller('SignupCtrl', function ($scope, Auth, $location, $window) {
    $scope.user = {};
    $scope.errors = {};

    var custom_message = "Welcome"+""+$scope.user.name;

    $scope.register = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Account created, redirect to the page with requested a signup
          swal({   title: "Welcome!", imageUrl: "assets/img/logo.png" , text: "Thanks you for signing up enjoy convenience redefined.",   timer: 7000,   showConfirmButton: false });
          Auth.redirectToAttemptedUrl();
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
