/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var CategoryMP = require('./categorymp.model');

exports.register = function(socket) {
  CategoryMP.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  CategoryMP.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('category:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('category:remove', doc);
}