'use strict';

var _ = require('lodash');
var Suburb = require('./suburb.model');
var Shipping = require('../shipping/shipping.model');

// Get list of suburbs
exports.active = function(req, res) {
  var async = require("async");
  // Async is required. Because without async it does not wait while accessed outside the scope. it simply returns null
    var selectedSuburb = [];
  Shipping.find({active:true}).distinct('suburb').exec(function (err, shipping) {
    if(err) { return handleError(res, err); }
    async.each(shipping, function(a, callback){
      // var a = a.toObject();
    // console.log(a);
      Suburb.find({name:a}, function (err, countrys) {
        if(err) { return handleError(res, err); }
        selectedSuburb.push(suburb[0]);
        callback();
      });
    },
    // 3rd param is the function to call when everything's done
    function(err){
      if( err ) { return res.status(404).send('Not Found'); } else { return res.status(200).json(selectedSuburb); }
    });
  });
};

// Get list of countrys
exports.index = function(req, res) {
  Suburb.find(function (err, suburbs) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(suburbs);
  });
};

// Get a single country
exports.show = function(req, res) {
  Suburb.findById(req.params.id, function (err, suburb) {
    if(err) { return handleError(res, err); }
    if(!suburb) { return res.status(404).send('Not Found'); }
    return res.json(suburb);
  });
};

// Creates a new country in the DB.
exports.create = function(req, res) {
  Suburb.create(req.body, function(err, suburb) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(suburb);
  });
};

// Updates an existing country in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Suburb.findById(req.params.id, function (err, suburb) {
    if (err) { return handleError(res, err); }
    if(!suburb) { return res.status(404).send('Not Found'); }
    var updated = _.merge(suburb, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(suburb);
    });
  });
};

// Deletes a country from the DB.
exports.destroy = function(req, res) {
  Suburb.findById(req.params.id, function (err, suburb) {
    if(err) { return handleError(res, err); }
    if(!suburb) { return res.status(404).send('Not Found'); }
    suburb.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
