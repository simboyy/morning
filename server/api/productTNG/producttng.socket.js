/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var ProductTNG = require('./producttng.model');

exports.register = function(socket) {
  ProductTNG.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  ProductTNG.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('product:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('product:remove', doc);
}