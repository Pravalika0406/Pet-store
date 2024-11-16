const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Shivani:223344@in-aws.k72oo.mongodb.net/max-store2?retryWrites=true&w=majority&appName=In-AWS"
);

const connection = mongoose.connection;

connection.on("connected", () => console.log("DB Connected"));
connection.on("error", () => console.log("DB Error"));

module.exports = mongoose;

// const db = require('./config/db')
