const mocha = require("mocha");
const assert = require("assert"); //it has to be required because it's not built into mocha
const NickyChar = require("../models/nickyChar");

//Describe tests Telling mocha what our tests are about
describe("Updating records", function() {
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

  it("Updates one record in the database", function(done) {
    NickyChar.findOneAndUpdate({ name: "Nicky" }, { name: "Bianca" }).then(
      function() {
        NickyChar.findOne({ _id: char._id }).then(function(result) {
          assert(result.name === "Bianca");
          done();
        });
      }
    );
  });
});
