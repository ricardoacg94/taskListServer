const mongoose = require("mongoose");

const dbConecction = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://riancogo21:Pe6nGNY5jdSD702q@cluster0.yui3mao.mongodb.net/task"
    );

    console.log("Base de datos en linea");
  } catch (error) {
    throw new Error("Fallo en la conexion a la Base de Datos");
  }
};

module.exports = dbConecction;
