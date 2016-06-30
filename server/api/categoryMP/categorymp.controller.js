'use strict';

var _ = require('lodash');
var CategoryMP = require('./categorymp.model');

// Get list of categorys
exports.index = function(req, res) {
  CategoryMP.find(function (err, categorys) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(categorys);
  });
};

// Get list of parents
exports.parents = function(req, res) {
  // console.log(req.params.id);
  CategoryMP.find({'parentId' : parseInt(req.params.id)},function (err, categorys) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(categorys);
  });
};

// Get list of parents
exports.categorymp = function(req, res) {
  // console.log(req.params.id);
  CategoryMP.find({'category' : parseInt(req.params.id)},function (err, categorys) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(categorys);
  });
};

// Get all categories with corresponding sub_categories
exports.all = function(req, res) {
  var async = require("async");
  var p = [];
  CategoryMP.find({parentCategory:0, active:true}).select({name:1,category:1,parentCategory:1,slug:1}).exec(function(err,parents){
  // Using async library which will enable us to wait until data received from database
  async.each(parents, function(a, callback){
      a = a.toObject();
     CategoryMP.find({parentCategory:parseInt(a.category), active:true}).select({name:1,category:1,parentCategory:1,slug:1}).exec(function(err,c){
        a.sub_categories = c;
        p.push(a);
        callback();
      });
    },
    // 3rd param is the function to call when everything's done
    function(err){
      if( err ) { return res.status(404).send('Not Found'); } else { return res.status(200).json(p); }
    }
  );
});

};

// Get a single category
exports.show = function(req, res) {
  CategoryMP.findById(req.params.id, function (err, category) {
    if(err) { return handleError(res, err); }
    if(!category) { return res.status(404).send('Not Found'); }
    return res.json(category);
  });
};

// Creates a new category in the DB.
exports.create = function(req, res) {
  req.body.uid = req.user.email; // id change on every login hence email is used
  req.body.updated = Date.now();
  if(!req.body.slug && req.body.name)
  req.body.slug = req.body.name.toString().toLowerCase()
                      .replace(/\s+/g, '-')        // Replace spaces with -
                      .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
                      .replace(/\-\-+/g, '-')      // Replace multiple - with single -
                      .replace(/^-+/, '')          // Trim - from start of text
                      .replace(/-+$/, '');
  CategoryMP.create(req.body, function(err, category) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(category);
  });
};

// Updates an existing category in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  req.body.uid = req.user.email; // id changes on every login hence email is used
  req.body.updated = Date.now();
  if(!req.body.slug && req.body.name)
  req.body.slug = req.body.name.toString().toLowerCase()
                      .replace(/\s+/g, '-')        // Replace spaces with -
                      .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
                      .replace(/\-\-+/g, '-')      // Replace multiple - with single -
                      .replace(/^-+/, '')          // Trim - from start of text
                      .replace(/-+$/, '');

  CategoryMP.findById(req.params.id, function (err, category) {
    if (err) { return handleError(res, err); }
    if(!category) { return res.status(404).send('Not Found'); }
    var updated = _.merge(category, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(category);
    });
  });
};

// Deletes a category from the DB.
exports.destroy = function(req, res) {
  CategoryMP.findById(req.params.id, function (err, category) {
    if(err) { return handleError(res, err); }
    if(!category) { return res.status(404).send('Not Found'); }
    category.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
