/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var CouponTNG = require('./coupontng.model');

exports.register = function(socket) {
  CouponTNG.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  CouponTNG.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('coupon:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('coupon:remove', doc);
}