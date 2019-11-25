const mocha = require("mocha");
const assert = require("assert"); //it has to be required because it's not built into mocha
const NickyChar = require("../models/nickyChar");

//Describe tests Telling mocha what our tests are about
describe("Saving records", function() {
  //Create tests
  //Each it block desribes a single test
  it("Saves a record to the database", function(done) {
    var char = new NickyChar({
      name: "Nicky"
    });

    char.save().then(function() {
      assert(char.isNew === false); //to assertain that this character has been saved to the db we use .isNew property and set it to false
      done(); //mocha needs to know when the test is completed
    });
  });
});
