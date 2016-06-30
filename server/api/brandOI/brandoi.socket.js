/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var BrandOI = require('./brandoi.model');

exports.register = function(socket) {
  BrandOI.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
 BrandOI.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('brand:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('brand:remove', doc);
}