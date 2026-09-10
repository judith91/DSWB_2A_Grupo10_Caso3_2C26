const express = require("express");
const router = express.Router();

const {
  obtenerEventos,
  obtenerEventoPorId,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
  mostrarEventosVista,
  mostrarNuevoEventoVista,
} = require("../controllers/eventos.controllers");

//Vistas de eventos
router.get("/vista", mostrarEventosVista);
router.get("/nuevo", mostrarNuevoEventoVista);

router.get("/", obtenerEventos);
router.get("/:id", obtenerEventoPorId);
router.post("/", crearEvento);
router.put("/:id", actualizarEvento);
router.delete("/:id", eliminarEvento);

module.exports = router;
