const express = require("express");
const { query, check } = require("express-validator");
const {
  getTareas,
  postTareas,
  putTareas,
  deleteTareas,
} = require("../controllers/tareasControllers");
const router = express.Router();

router.get("/", getTareas);

router.post("/", postTareas);

router.put("/:id", check("name").notEmpty(), putTareas);

router.delete(
  "/:id",
  check("id", "resvise en este ingresando un valor o id validos")
    .notEmpty()
    .isMongoId(),
  deleteTareas
);

module.exports = router;
