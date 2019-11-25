//this file contains all of the code for connecting to the database
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/nickydata");

mongoose.connection
  .once("open", function() {
    console.log("Connection has been made...");
  })
  .on("error", function(error) {
    console.log("Connetion error:", error);
  });
