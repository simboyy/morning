'use strict';

angular.module('shopnxApp')
  .controller('NavbarCtrl', ['$scope', '$rootScope', '$location', 'Auth', '$modal', 'Cart', 'Wishlist','Category','CategoryMP','CategoryOI','CategoryTNG', 'Brand', 'SortOptions', '$q', 'Product', '$state', function ($scope,$rootScope, $location, Auth, $modal, Cart, Wishlist,Category,CategoryMP,CategoryTNG,CategoryOI, Brand,SortOptions,$q, Product, $state) {
       $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };

    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;

      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }

    function buildToggler(navID) {
      return function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }
    }

    $scope.hideSubMenu = function(){
      // $('.megamenu .dropdown:hover .dropdown-menu').hide(); // Hide the navbar submenu once a category is selected
    }
    $rootScope.cart = Cart.cart;
    $rootScope.wishlist = Wishlist.wishlist;
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

     $rootScope.nav= null;

    $scope.result = null;

    $rootScope.brands = Brand.query({active:true});
    $rootScope.sortOptions = SortOptions.server;

    $scope.isCollapsed = true;
    $scope.isCollapsed1 = true;
    $rootScope.isLoggedIn = Auth.isLoggedIn;
    $rootScope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $rootScope.checkCart = function(id){
        if(!_.contains($scope.cart.skuArray, id)){
            return true;
        }else{
            return false;
        }
    };

    $rootScope.checkWishlist = function(id){
        if(!_.contains($scope.wishlist.skuArray, id)){
            return true;
        }else{
            return false;
        }
    };

    $rootScope.getQuantity = function(sku){
        for(var i = 0;i<$scope.cart.items.length;i++){
            if($scope.cart.items[i].sku === sku){
              return $scope.cart.items[i].quantity;
            }
        }
    };

    $rootScope.getQuantityWishlist = function(sku){
        for(var i = 0;i<$scope.wishlist.items.length;i++){
            if($scope.wishlist.items[i].sku === sku){
              return $scope.wishlist.items[i].quantity;
            }
        }
    };

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.onSelectProduct = function($item){
        $state.go('productDetail', {id:$item._id, slug:$item.slug}, {reload: false});
        $scope.search = '';
    };

    $scope.navigate = function(nav) {

    	$rootScope.nav = nav;
    	console.log(nav);
    	$location.replace().path('Category'+'/'+nav.slug+'/'+nav.id);
    
    }

    $scope.categories = Category.all.query();
    $scope.categoriesMP = CategoryMP.all.query();
    $scope.categoriesTNG= CategoryOI.all.query();

    $scope.categoriesOI = CategoryTNG.all.query();

// // Script which calls all category from parent 0 and constructs the category hierarchy
// // This was moved to the server and now 1 call does it all instead 1 for each parent category + 1 for parent category itself
// var p = [];
// Category.parent.query({id:0},function(parents){
//     angular.forEach(parents,function(a){
//         a.children = [];
//         Category.parent.query({id:a.category},function(children){
//           a.children = children;
//         });
//         p.push(a);
//     });
//         $scope.categories = p;
//         // console.log(p);
// });

    $scope.globalSearch = function(input){
          input = input.toLowerCase();
            var defer = $q.defer();
            if (input){
                Product.query({where:{nameLower: {'$regex': input}, active:true}, limit:10, select: {id: 1, name:1, slug: 1}},
                    function(data){
                          console.log(data);
                        if (!$scope.$$phase){ //check if digest is not in progress
                            $rootScope.$apply(function(){
                                defer.resolve(data);
                            });
                        } else {
                            defer.resolve(data);
                        }
                    },
                    function(response){
                        if (!$scope.$$phase){
                            $rootScope.$apply(function(){
                                defer.reject('Server rejected with status ' + response.status);
                            });
                        } else {
                            defer.reject('Server rejected with status ' + response.status);
                        }
                    });
            } else {
                if (!$scope.$$phase){
                    $rootScope.$apply(function(){
                        defer.reject('No search query ');
                        // $log.info('No search query provided');
                    });
                } else {
                    defer.reject('No search query ');
                    // $log.info('No search query provided');
                }
            }
            return defer.promise;
        };

        $scope.openCart = function (cart) {
            cart = $scope.cart = cart;
            // console.log(cart);

            var modalOptions = {
                templateUrl: 'app/cart/cart.html',
                controller: cartEditCtrl,
                controllerAs: 'modal',
                size:"lg",
                windowClass: 'ab-modal-window',
                resolve: {
                    cart: function () { return cart; },
                }
            };
            $modal.open(modalOptions);

        };
        var cartEditCtrl = function ($scope, $modalInstance, cart) {
            $scope.cart = cart;
            $scope.cancel = function () {
                $modalInstance.dismiss('Close');
            };
        };
        cartEditCtrl.$inject = ['$scope', '$modalInstance', 'cart'];

        $scope.openWishlist = function (wishlist) {
            wishlist= $scope.wishlist = wishlist;
            // console.log(cart);

            var modalOptions = {
                templateUrl: 'app/wishlist/wishlist.html',
                controller: wishlistEditCtrl,
                controllerAs: 'modal',
                size:"lg",
                windowClass: 'ab-modal-window',
                resolve: {
                    wishlist: function () { return wishlist; },
                }
            };
            $modal.open(modalOptions);

        };
        var wishlistEditCtrl = function ($scope, $modalInstance, wishlist) {
            $scope.wishlist = wishlist;
            $scope.cancel = function () {
                $modalInstance.dismiss('Close');
            };
        };
        wishlistEditCtrl.$inject = ['$scope', '$modalInstance', 'wishlist'];
  }])

.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });

    };
  })
  .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
  });
