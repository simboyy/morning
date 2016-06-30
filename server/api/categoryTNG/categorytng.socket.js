/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var CategoryTNG = require('./categorytng.model');

exports.register = function(socket) {
  CategoryTNG.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  CategoryTNG.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('category:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('category:remove', doc);
}