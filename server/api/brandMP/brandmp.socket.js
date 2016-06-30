/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var BrandMP = require('./brandmp.model');

exports.register = function(socket) {
  BrandMP.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  BrandMP.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('brand:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('brand:remove', doc);
}