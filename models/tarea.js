const mongoose = require("mongoose");

const tareaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  done: { type: Boolean, default: false },
  id: { type: String, required: true },
});

const Tarea = mongoose.model("Tarea", tareaSchema);

module.exports = Tarea;
