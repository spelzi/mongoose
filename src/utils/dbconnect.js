const mongoose = require("mongoose");

const connectDb = async () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/node-server")
    .then(() => console.log("database connected"))
    .catch((error) => console.log(error));
};

module.exports = connectDb;
