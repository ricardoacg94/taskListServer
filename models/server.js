const express = require("express");
const tareas = require("../routes/tareas");
const cors = require("cors");
const dbConecction = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = 8080;
    this.mongoConecttion();
    this.middlewares();
    this.routes();
  }

  async mongoConecttion() {
    await dbConecction();
  }

  // middlewares

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use("/tareas", tareas);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Corriendo en servidor ${this.port} `);
    });
  }
}

module.exports = Server;
