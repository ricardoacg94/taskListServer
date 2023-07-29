const express = require("express");
const {
  getTareas,
  postTareas,
  putTareas,
  deleteTareas,
} = require("../controllers/tareasControllers");
const router = express.Router();

router.get("/", getTareas);

router.post("/", postTareas);

router.put("/", putTareas);

router.delete("/", deleteTareas);

module.exports = router;
