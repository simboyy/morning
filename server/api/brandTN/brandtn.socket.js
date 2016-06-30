/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var BrandTN = require('./brandtn.model');

exports.register = function(socket) {
  BrandTN.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
 BrandTN.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('brand:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('brand:remove', doc);
}