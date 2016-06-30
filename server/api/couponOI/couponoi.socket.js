/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var CouponOI = require('./couponoi.model');

exports.register = function(socket) {
  CouponOI.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  CouponOI.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('coupon:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('coupon:remove', doc);
}