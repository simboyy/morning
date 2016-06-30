/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/countries', require('./api/country'));
  app.use('/api/suburbs', require('./api/suburb'));
  app.use('/api/shippings', require('./api/shipping'));
  app.use('/api/coupons', require('./api/coupon'));
  app.use('/api/couponsmp', require('./api/couponMP'));
   app.use('/api/couponsoi', require('./api/couponOI'));
    app.use('/api/couponstng', require('./api/couponTNG'));

  app.use('/api/features', require('./api/feature'));
  app.use('/api/PaymentMethods', require('./api/PaymentMethod'));
  app.use('/api/settings', require('./api/setting'));
  app.use('/api/dashboard', require('./api/dashboard'));
  app.use('/api/cart', require('./api/cart'));
  app.use('/api/invoices', require('./api/invoice'));
  app.use('/api/shop', require('./api/shop'));

  app.use('/api/brands', require('./api/brand'));
  app.use('/api/brandsmp', require('./api/brandMP'));
  app.use('/api/brandsoi', require('./api/brandOI'));
  

  app.use('/api/category', require('./api/category'));
  app.use('/api/categorymp', require('./api/categoryMP'));
  app.use('/api/categoryoi', require('./api/categoryOI'));
  app.use('/api/categorytng', require('./api/categoryTNG'));

  app.use('/api/orders', require('./api/order'));
  app.use('/api/ordersmp', require('./api/orderMP'));
  app.use('/api/ordersoi', require('./api/orderOI'));
  app.use('/api/orderstng', require('./api/orderTNG'));

  app.use('/api/products', require('./api/product'));
  app.use('/api/productsmp', require('./api/productMP'));
  app.use('/api/productsoi', require('./api/productOI'));
  app.use('/api/productstng', require('./api/productTNG'));

  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};
