/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var CouponMP = require('./couponmp.model');

exports.register = function(socket) {
  CouponMP.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  CouponMP.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('coupon:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('coupon:remove', doc);
}