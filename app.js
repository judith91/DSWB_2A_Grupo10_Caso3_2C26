require("dotenv").config();
const express = require("express");
const path = require("path");

const eventoRoutes = require("./src/routes/eventos.routes");
const clienteRoutes = require("./src/routes/clientes.routes");
const salasRoutes = require("./src/routes/salas.routes");

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "src", "views"));
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Urbana Cult");
});


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.locals.currentPath = req.path;
    next();
});

// Rutas
app.use("/eventos", eventoRoutes);
app.use("/clientes", clienteRoutes);
app.use("/salas", salasRoutes);


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
