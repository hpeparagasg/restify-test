// Dependencies
var restify = require('restify');
var recipes = require('./api/recipes');

// Server
var server = restify.createServer();

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.jsonp());

server.listen(3000, function(){
  console.log('Server started at port 3000');
});

// Recipes
server.get('/recipes',recipes.selectAll);
server.get('/recipes/:id', recipes.select);
server.put('/recipes/:id', recipes.update);
server.post('/recipes', recipes.insert);
server.del('recipes/:id', recipes.delete);

// Exports
