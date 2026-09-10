const express = require("express");

const {
  obtenerSalas,
  obtenerSalaPorId,
  crearSala,
  actualizarSala,
  eliminarSala,
  mostrarSalasVista,
} = require("../controllers/salas.controllers");

const router = express.Router();


// Vista de salas
router.get("/vista", mostrarSalasVista);


router.get("/", obtenerSalas);
router.get("/:id", obtenerSalaPorId);
router.post("/", crearSala);
router.put("/:id", actualizarSala);
router.delete("/:id", eliminarSala);


module.exports = router;