/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var ProductMP = require('./productmp.model');

exports.register = function(socket) {
  ProductMP.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  ProductMP.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('product:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('product:remove', doc);
}