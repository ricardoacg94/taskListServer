const Tarea = require("../models/tarea");

const getTareas = (req, res) => {
  res.json({
    msg: "Lista de Tareas",
  });
};

const postTareas = async (req, res) => {
  const { name, done, owner, ownerEmail } = req.body;

  if (!name) {
    res.status(403);
    res.send({ error: "name empty" });
  } else {
    const tarea = new Tarea({ name, done, owner, ownerEmail });

    await tarea.save();
    res.json({
      msg: "Creando Tareas",
      tarea,
    });
  }
};

const putTareas = (req, res) => {
  res.json({
    msg: "Actualizando Tareas",
  });
};

const deleteTareas = (req, res) => {
  res.json({
    msg: "Eliminando Tareas",
  });
};

module.exports = {
  getTareas,
  postTareas,
  putTareas,
  deleteTareas,
};
