// dependencies
var db = require('../util/mongo');
var mongojs = require('mongojs');

// Initialization
var recipes = {};

// Functions
recipes.selectAll = function (req, res, next){
  db.collection('recipes').find(function(err, recipes){
    if (err){
      console.log('error');
      throw err;
    }
    res.send(recipes);
  });
  return next();
};

recipes.select = function (req, res, next){
  db.collection('recipes').findOne({_id: mongojs.ObjectId(req.params.id)},function(err,recipe){
    if (err){
      throw err;
    }
    res.send(recipe);
  });
  return next();
};

recipes.update = function (req, res, next){

  db.collection('recipes').findAndModify({
    query: {_id: mongojs.ObjectId(req.params.id)},
    update: {$set: req.body},
    new: true,
  }, function(err,recipe){
    if (err){
      throw err;
    }
    res.send(recipe);
  });

  return next();
};

recipes.insert = function (req, res, next){
  db.collection('recipes').insert(req.body);
  res.send(201,'Insert successful');
  return next();
}


module.exports = recipes;
