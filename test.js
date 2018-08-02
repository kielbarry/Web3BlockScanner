let assert = require('assert');
let expect = require('expect');
var should  = require('chai').should();

let funcs = require('./app.js');
let testData = require('./ropstenTestData.js');
 
describe('ValidInput', function(){

	it('should return false if empty', function(){
	  var isValid = funcs.returnIsValid([''])
	  assert.equal(isValid, false);
	});

	it('should return false if more than 2', function(){
	  var isValid = funcs.returnIsValid(['123', '12341', '12312'])
	  assert.equal(isValid, false);
	});

	it('should return false if not only digits', function(){
	  var isValid = funcs.returnIsValid(['1adsf'])
	  assert.equal(isValid, false);
	});

	it('should return false if not only digits', function(){
	  var isValid = funcs.returnIsValid(['123', '23asdf'])
	  assert.equal(isValid, false);
	});

	it('should return true', function(){
	  var isValid = funcs.returnIsValid(['123'])
	  assert.equal(isValid, true);
	});

	it('should return true', function(){
	  var isValid = funcs.returnIsValid(['123', '234'])
	  assert.equal(isValid, true);
	});
});

describe('CorrectAnalysis', function(){
	it('should return true for small object', function(){
		funcs.getBlockStats(testData.testBlock1).then(resp => {
			resp.should.be.deep.equal(testData.testBlock1Answer)
		})
	});

	it('should return true for ropsten block 3717820', function(){
		funcs.getBlockStats(testData.testBlock2).then(resp => {
			resp.should.be.deep.equal(testData.testBlock2Answer)			
		})
	});
});





