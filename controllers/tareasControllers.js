const Tarea = require("../models/tarea");
const { validationResult, check } = require("express-validator");
const getTareas = async (req, res) => {
  const tareas = await Tarea.find({});
  res.json({
    tareas,
  });
};

const postTareas = async (req, res) => {
  const { name, id } = req.body;
  const result = validationResult(req);

  if (result.isEmpty()) {
    const tarea = new Tarea({ name, id });

    await tarea.save();
    res.json({
      msg: "Creando Tareas",
      tarea,
    });
  }

  res.send({ errors: result.array() });
};

const putTareas = async (req, res) => {
  const result = validationResult(req);
  const { id } = req.params;
  const { name, done } = req.body;

  if (result.isEmpty()) {
    const tarea = await Tarea.findOneAndUpdate(
      { id: id },
      { done: done, name: name },
      { new: true }
    );

    res.json({
      msg: "Actualizando Tareas",

      tarea,
    });
  } else {
    res.send({ errors: result.array() });
  }
};

const deleteTareas = async (req, res) => {
  const result = validationResult(req);
  const { id } = req.params;

  if (result.isEmpty()) {
    const tarea = await Tarea.findByIdAndDelete(id);

    res.json({
      msg: "Eliminando Tareas",
      tarea,
    });
  } else {
    res.send({ errors: result.array() });
  }
};

module.exports = {
  getTareas,
  postTareas,
  putTareas,
  deleteTareas,
};
