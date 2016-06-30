/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var OrderOI = require('./orderoi.model');

exports.register = function(socket) {
  OrderOI.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  OrderOI.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('order:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('order:remove', doc);
}