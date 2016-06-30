/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var OrderMP = require('./ordermp.model');

exports.register = function(socket) {
  OrderMP.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  OrderMP.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('order:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('order:remove', doc);
}