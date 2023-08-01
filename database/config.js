const mongoose = require("mongoose");

const dbConecction = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://riancogo21:Pe6nGNY5jdSD702q@cluster0.yui3mao.mongodb.net/task?retryWrites=true&w=majority"
    );

    console.log("Base de datos en linea");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConecction;
