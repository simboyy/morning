/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Suburb = require('./suburb.model');

exports.register = function(socket) {
  Suburb.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Suburb.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('suburb:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('suburb:remove', doc);
}