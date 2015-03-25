var assert = require("assert");
var S = require('../number.js');


describe ("Ones Function", function(){
	it("should speak out the numbers 1-9", function() {
		assert.equal(S.speakNum('9'), "Nine")
	})
})

describe ("Teens Function", function(){
	it("should speak out the numbers between 9 and 20", function() {
		assert.equal(S.speakNum('13'), "Thirteen")
	})
})

describe ("Tens Function", function(){
	it("should speak out the numbers >19 and <100", function() {
		assert.equal(S.speakNum('32'), "Thirty Two")
	})
})

describe ("Hundreds Function", function(){
	it("should speak out the numbers between 100 and 999", function() {
		assert.equal(S.speakNum('714'), "Seven Hundred Fourteen")
	})
})

describe (">1000 with zeros Function", function(){
	it("should speak out the numbers above 999, below 2501", function() {
		assert.equal(S.speakNum('1014'), "One Thousand Fourteen")
	})
})

describe ("Thousands with only one ones digits Function", function(){
	it("should speak out the numbers 1-9", function() {
		assert.equal(S.speakNum('2008'), "Two Thousand Eight")
	})
})

describe ("Over threshold Function", function(){
	it("should speak out the numbers 1-9", function() {
		assert.equal(S.speakNum('3000'), "Please enter an integer (whole numbers, no decimals or fractions) between 0 and 2501. You can leave off initial zeros")
	})
})