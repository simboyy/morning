/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var ProductOI = require('./productoi.model');

exports.register = function(socket) {
  ProductOI.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  ProductOI.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('product:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('product:remove', doc);
}