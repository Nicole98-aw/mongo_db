const mocha = require("mocha");
const assert = require("assert"); //it has to be required because it's not built into mocha
const NickyChar = require("../models/nickyChar");

//Describe tests Telling mocha what our tests are about
describe("Finding records", function() {
  var char;

  beforeEach(function(done) {
    char = new NickyChar({
      name: "Nicky"
    });

    char.save().then(function() {
      assert(char.isNew === false); //to assertain that this character has been saved to the db we use .isNew property and set it to false
      done(); //mocha needs to know when the test is completed
    });
  });
  //Create tests
  //Each it block desribes a single test
  it("Finds one record by ID fron the database", function(done) {
    NickyChar.findOne({ name: "Nicky" }).then(function(res) {
      assert(res.name === "Nicky");
      done();
    });
  });

  it("Finds one record fron the database", function(done) {
    NickyChar.findOne({ _id: char._id }).then(function(res) {
      assert(res._id.toString() === char._id.toString());
      done();
    });
  });
});
