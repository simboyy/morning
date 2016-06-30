'use strict';

var _ = require('lodash');
var Campaign = require('./campaign.model');
var Mysql = require('mysql');

var connection = Mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'oabs'
});



connection.connect();
// Get all campaigns by a user
exports.myCampaigns = function(req, res) {
  Campaign.find({'uid' : req.user.email},function (err, campaigns) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(campaigns);
  });
};

// Get all campaigns for a publisher
exports.pubCampaigns = function(req, res) {
  Campaign.find({ "items.uid" : req.user.email},function (err, campaigns) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(campaigns);
  });
};

// Get list of campaign
exports.index = function(req, res) {


  var query = connection.query('select * from  campaigns ', cc ,function(err,result){

    console.log(query.sql);

    if(err){
      console.error(err);
      return;      
    }

    console.log(result);


  });

  Campaign.find(function (err, campaigns) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(campaigns);
  });
};

// Get a single campaign
exports.show = function(req, res) {
  Campaign.findById(req.params.id, function (err, campaign) {
    if(err) { return handleError(res, err); }
    if(!campaign) { return res.status(404).send('Not Found'); }
    return res.json(campaign);
  });
};

// Creates a new Campaign in the DB.
exports.create = function(req, res) {

  // console.log(req.body.items);
  req.body.uid = req.user.email; // id change on every login hence email is used
  var shortId = require('shortid');
  req.body.campaignNo = shortId.generate();

  req.body.status = {name:"New", val:201};


  var cc = {
    'campaignNo':req.body.campaignNo,
    'startDate':req.body.startDate,
    'endDate':req.body.endDate,
    'campaignName':req.body.campaignName,
    'campaignDate':req.body.startDate

  };



  var query = connection.query('insert into campaigns set ?', cc ,function(err,result){

    console.log(query.sql);

    if(err){
      console.error(err);
      return;      
    }

    console.log(result);


  });


  Campaign.create(req.body, function(err, campaign) {
    if(err) { console.log(err);return handleError(res, err); }
    return res.status(201).json(campaign);
  });
};

// Updates an existing campaign in the DB.
exports.update = function(req, res) {
  console.log(req.body);
  if(req.body._id) { delete req.body._id; }
  if(req.body.__v) { delete req.body.__v; }
  // req.body.uid = req.user.email; // id change on every login hence email is used

  if(req.body.items){
    
  req.body.updated = Date.now();
  Campaign.findById(req.params.id, function (err, campaign) {
    if (err) { return handleError(res, err); }
    if(!campaign) { return res.status(404).send('Not Found'); }
    var updated = _.merge(campaign, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(campaign);
    });
  });
}

else{

   Campaign.findById(req.params.id, function (err, campaign) {

    if (err) { return handleError(res, err); }
    if(!campaign) { return res.status(404).send('Not Found'); }
    campaign.items= [];

    for (var i = 0; i < campaign.items.length; i++) {
      campaign.items[i].price;
      console.log(campaign.items[i].price);
    }


    campaign.items = req.body;
   
    campaign.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(campaign);
    });
  });
}

};

// Updates an existing campaign in the DB.
exports.updateStatus = function(req, res) {
  // console.log(req.body._id);
  if(req.body._id) { delete req.body._id; }
  if(req.body.__v) { delete req.body.__v; }
  // req.body.uid = req.user.email; // id change on every login hence email is used
  // req.body.updated = Date.now();
  Campaign.findById(req.params.id, function (err, campaign) {

    if (err) { return handleError(res, err); }
    if(!campaign) { return res.status(404).send('Not Found'); }
    campaign.items= [];

    for (var i = 0; i < campaign.items.length; i++) {
      campaign.items[i].price;
      console.log(campaign.items[i].price);
    }


    campaign.items = req.body;
   
    campaign.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(campaign);
    });
  });
};

// Deletes a campaign from the DB.
exports.destroy = function(req, res) {
  Campaign.findById(req.params.id, function (err, campaign) {
    if(err) { return handleError(res, err); }
    if(!campaign) { return res.status(404).send('Not Found'); }
      campaign.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
