var should = require('should');
var expect = require('chai').expect;
var request = require('request');
var baseUrl = 'http://0.0.0.0:3000/';

describe('returns recipes', function(){
  it('returns recipes', function(done) {
    request.get({url: baseUrl + 'recipes'}, function (error, response, body){
      expect(response.statusCode).to.equal(200);
    });
    done();
  });
});

describe('adds new recipe',function(){
  it('adds new recipe', function(done){
    request.post({url: baseUrl + 'recipes', formData:{'name':'Igado','ingredients':['Pork','Vinegar','Peas','Pork Liver']}},
          function (error, response, body){
            expect(response.statusCode).to.equal(201);
          });
    done();
  });
});
