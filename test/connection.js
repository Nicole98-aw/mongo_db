//this file contains all of the code for connecting to the database
const mongoose = require("mongoose");

//Connect to the db before tests run
before(function(done) {
  //before tells mocha to wait till connection has beeen established before running tests
  //Connect to mongodb
  mongoose.connect("mongodb://localhost/nickydata");

  mongoose.connection
    .once("open", function() {
      console.log("Connection has been made...");
      done(); //telling mocha that the connection has been established
    })
    .on("error", function(error) {
      console.log("Connetion error:", error);
    });
});
