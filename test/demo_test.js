const mocha = require("mocha");
const assert = require("assert"); //it has to be required because it's not built into mocha

//Describe tests Telling mocha what our tests are about
describe("some demo tests", function() {
  //Create tests
  //Each it block desribes a single test
  it("add two numbers together", function() {
    assert(2 + 3 === 5);
  });
});
