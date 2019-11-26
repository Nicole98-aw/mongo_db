const mocha = require("mocha");
const assert = require("assert"); //it has to be required because it's not built into mocha
const NickyChar = require("../models/nickyChar");

//Describe tests Telling mocha what our tests are about
describe("Deleting records", function() {
  var char;

  beforeEach(function(done) {
    char = new NickyChar({
      name: "Nicky"
    });

    char.save().then(function() {
      assert(char.isNew === false);
      done();
    });
  });

  it("Deletes one record from the database", function(done) {
    NickyChar.findOneAndRemove({ name: "Nicky" }).then(function() {
      NickyChar.findOne({ name: "Nicky" }).then(function(result) {
        assert(result === null);
        done();
      });
    });
  });
});
