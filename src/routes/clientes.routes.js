const express = require("express");
const router = express.Router();

// importar controladores
const {
    obtenerClientes,
    obtenerClientePorId,
    crearCliente,
    actualizarCliente,
    eliminarCliente,
    mostrarClientesVista,
    mostrarNuevoClienteVista,

} = require("../controllers/clientes.controllers");

//Rutas para vistas (Pug / HTML)
router.get("/vista", mostrarClientesVista);
router.get("/nuevo", mostrarNuevoClienteVista);

// Rutas de la API REST (JSON)
router.get("/", obtenerClientes);         // GET /clientes  
router.get("/:id", obtenerClientePorId);  // GET /clientes/:id
router.post("/", crearCliente);           // POST /clientes
router.put("/:id", actualizarCliente);    // PUT /clientes/:id
router.delete("/:id", eliminarCliente);   // DELETE /clientes/:id

// exportar router
module.exports = router;