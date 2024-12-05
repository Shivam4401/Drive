const mongoose = require("mongoose");

const mongoUrl = "mongodb://localhost:27017/drive";

mongoose.connect(mongoUrl);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("connected to mongodb server");
});

db.on("error", (err) => {
  console.log("mongodb error", err);
});

db.on("disconnected", () => {
  console.log("disconnected to mongodb server");
});

module.exports = db;
