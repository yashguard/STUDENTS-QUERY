const { default: mongoose } = require("mongoose");

const connect = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017")
    .then(() => {
      console.log("Successfully connected");
    })
    .catch(() => {
      console.log("Not connected");
    });
};

module.exports = connect;
