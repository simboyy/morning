/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var OrderTNG = require('./ordertng.model');

exports.register = function(socket) {
  OrderTNG.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  OrderTNG.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('order:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('order:remove', doc);
}