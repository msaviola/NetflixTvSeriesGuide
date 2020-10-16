// const chai = require("../node_modules/chai/chai.js");

console.log("we are beginning to run tests");


// const { expect } = require('../node_modules/chai/chai.js');
const showscript = require('../showscript.js');
const assert = require("chai").assert;

var moodButton = document.getElementsByClassName('mood-button').value;

describe('showscript', function() {
  it('the mood should match the response', function() {
    
    const result= document.getElementsByTagName("show-card");
    assert.equal(result, 7);

    // assert.equal(result, showscipt.responseMood);

  });
});

console.log("we are done test checks");